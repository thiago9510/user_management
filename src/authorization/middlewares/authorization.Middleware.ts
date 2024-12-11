import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from 'dotenv'
import { dataTokenInterface } from "../interfaces/authorization.Interface";
import { authorizationService } from "../services/authorization.service";

dotenv.config()

export const autorizationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {       
        const dataToken = req.user as dataTokenInterface
        const usuario_id: number = parseInt(dataToken.sub as string)
        const rotaAtual = req.path // Captura a rota atual da requisição
        const rotaNormalizada = req.path.replace(/\d+/g, ":id")        

        const ValidationPermission = new authorizationService()
        const ValidationPermissionReturn = await ValidationPermission.autorization(usuario_id, rotaNormalizada)
        if(ValidationPermissionReturn.success == true){
            next()
        }else {
            return res.status(401).json({
                sucess: false,
                menssagem: ValidationPermissionReturn.message
            })
        }       
    } catch (error) {
        return res.status(403).json({
            sucess: false,
            menssagem: error
        })
    }
}