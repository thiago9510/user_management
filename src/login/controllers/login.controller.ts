import { Request, Response, NextFunction } from "express";
import { UsuarioInterface } from "../../usuario/interfaces/usuario.interface";
import { LoginInterface } from "../interfaces/login.interface";
import { LoginService } from "../services/login.service";

export const authenticateLoginController = async (req: Request, res: Response, next: NextFunction) => {
    const usuario: LoginInterface = req.body
    const service = new LoginService()
    const response = await service.authenticate(usuario)
    if (response.success == false){
        res.status(400).json(response)
    }else {
        res.status(200).json(response)
    }    
}



