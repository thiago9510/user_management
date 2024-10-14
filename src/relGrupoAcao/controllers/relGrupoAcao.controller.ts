import { Request, Response, NextFunction } from "express"
import { RelGruposAcaoInterface } from "../interfaces/relGrupoAcao.interface"
import { RelGrupoAcaoService } from "../services/relGrupoAcao.service"

//Create
export const relGrupoAcaoAddController = async (req: Request, res: Response) => {
    const  relGrupoAcao: RelGruposAcaoInterface = req.body
    const service = new RelGrupoAcaoService()    
    const response = await service.add(relGrupoAcao)
    if (response.success == false) {
        res.status(400).json(response)
    } else {
        res.status(200).json(response)
    }
}

//Read
export const relGrupoAcaoSearchController = async (req: Request, res: Response) => {    
    const relGrupoAcao: any = req.query
    const service = new RelGrupoAcaoService()
    const response = await service.search(relGrupoAcao)
    if (response.success == false) {
        res.status(400).json(response)
    } else {
        res.status(200).json(response)
    }
}

//edit
export const relGrupoAcaoController = async (req: Request, res: Response) => {
    const  relGrupoAcaoId: number = parseInt(req.params.id)
    const relGrupoAcao: RelGruposAcaoInterface = req.body

    const service = new RelGrupoAcaoService()
    const response = await service.edit(relGrupoAcaoId, relGrupoAcao)
    if (response.success == false) {
        res.status(400).json(response)
    } else {
        res.status(200).json(response)
    }
}

//delte
export const relGrupoAcaoDeleteController = async (req: Request, res: Response) => {
    const relGrupoAcaoId = parseInt(req.params.id)

    try {
        const service = new RelGrupoAcaoService()
        const response = await service.delete(relGrupoAcaoId)
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