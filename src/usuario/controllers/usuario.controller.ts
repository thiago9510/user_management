import { Request, Response, NextFunction } from "express"
import { UsuarioInterface } from "../interfaces/usuario.interface"
import { UsuarioService } from "../services/usuario.service"


//Create
export const usuarioAddControlle = async (req: Request, res: Response) => {    
    const usuario: UsuarioInterface = req.body
    const service = new UsuarioService()
    const response = await service.addUsuario(usuario)
    if (response.success == false){
        res.status(400).json(response)
    }else {
        res.status(200).json(response)
    }    
}