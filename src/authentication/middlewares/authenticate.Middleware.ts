import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()


export const authenticateMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try { 
        const secretJWT: string | undefined = process.env.SECRET_JWT_KEY
        if(!secretJWT){
            return res.status(400).json({
                sucess: false,
                menssagem: 'Erro Interno do Servidor: Variável SECRET_JWT_KEY Não definida'
            })
        }
        const authValue = req.headers['authorization'] as string
        if(!authValue){
            return res.status(401).json({
                sucess: false,
                menssagem: 'Token Inválido'
            })
        }

        const hashToken = authValue.split(' ')
        if(hashToken.length !== 2 || hashToken[0] !== 'Bearer'){
            return res.status(401).json({
                sucess: false,
                menssagem: 'Token Inválido'
            })
        }

        //decodificar token se tudo certo
        const token = hashToken[1]
        const decoded = jwt.verify(token, secretJWT) as JwtPayload
        req.user = decoded as any //alterar quando definir o formato do token        
        
        next()       
    } catch (error) {
        return res.status(403).json({
            sucess: false,
            menssagem: error
        })
    }
}