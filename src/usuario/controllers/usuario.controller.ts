import { Request, Response, NextFunction } from "express"
import { UsuarioInterface } from "../interfaces/usuario.interface"
import { UsuarioService } from "../services/usuario.service"


//Create
export const usuarioAddControlle = async (req: Request, res: Response) => {
    const usuario: UsuarioInterface = req.body
    const service = new UsuarioService()
    const response = await service.addUsuario(usuario)
    if (response.success == false) {
        res.status(400).json(response)
    } else {
        res.status(200).json(response)
    }
}


//Read
export const usuarioSearchController = async (req: Request, res: Response) => {
    //ajustar para realizar o search
    const pessoa: any = req.query
    const service = new UsuarioService()
    const response = await service.searchUsuario(pessoa)
    if (response.success == false) {
        res.status(400).json(response)
    } else {
        res.status(200).json(response)
    }
}

//edit
export const usuarioEditController = async (req: Request, res: Response) => {
    const pessoaId: number = parseInt(req.params.id)
    const pessoa: UsuarioInterface = req.body

    const service = new UsuarioService()
    const response = await service.editUsuario(pessoaId, pessoa)
    if (response.success == false) {
        res.status(400).json(response)
    } else {
        res.status(200).json(response)
    }
}

//delte
export const usuarioDeleteController = async (req: Request, res: Response) => {
    const pessoaId = parseInt(req.params.id)

    try {
        const service = new UsuarioService()
        const response = await service.deleteUsuario(pessoaId)
        if(response != undefined || response != null){
            return res.status(response.status as number).json({
                sucess: response.success,
                menssagem: response.message
            }) 
        }      
    } catch (error) {
        return res.status(400).json({
            sucess: false,
            menssagem: error
        })
    }
}