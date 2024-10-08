import {Request, Response, NextFunction } from "express"
import { GrupoUsuariosInterface } from "../interfaces/grupoUsuarios.interface"
import { GrupoUsuarioService } from "../services/grupoUsuarios.service"


//Create
export const grupoUsuariosAddControlle = async (req: Request, res: Response) => {
    const grupo: GrupoUsuariosInterface = req.body
    const service = new GrupoUsuarioService()
    const response = await service.addGrupo(grupo)
    if (response.success == false) {
        res.status(400).json(response)
    } else {
        res.status(200).json(response)
    }
}

//Read
export const grupoUsuariosSearchController = async (req: Request, res: Response) => {
    //ajustar para realizar o search
    const grupo: any = req.query
    const service = new GrupoUsuarioService()
    const response = await service.searchGrupo(grupo)
    if (response.success == false) {
        res.status(400).json(response)
    } else {
        res.status(200).json(response)
    }
}

//edit
export const grupoUsuariosEditController = async (req: Request, res: Response) => {
    const grupoId: number = parseInt(req.params.id)
    const grupo: GrupoUsuariosInterface = req.body

    const service = new GrupoUsuarioService()
    const response = await service.editGrupo(grupoId, grupo)
    if (response.success == false) {
        res.status(400).json(response)
    } else {
        res.status(200).json(response)
    }
}

//delte
export const  grupoUsuariosController = async (req: Request, res: Response) => {
    const grupoId = parseInt(req.params.id)

    try {
        const service = new GrupoUsuarioService()
        const response = await service.deleteGrupo(grupoId)
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