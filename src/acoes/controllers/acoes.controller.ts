import { Request, Response, NextFunction } from "express"
import { AcoesInterface } from "../interfaces/acoes.interface"
import { AcoesService } from "../services/acoes.service"

//Create
export const acoesAddController = async (req: Request, res: Response) => {
    const acao: AcoesInterface = req.body
    const service = new AcoesService()
    const response = await service.add(acao)
    if (response.success == false) {
        res.status(400).json(response)
    } else {
        res.status(200).json(response)
    }
}

//Read
export const acoesSearchController = async (req: Request, res: Response) => {
    //ajustar para realizar o search
    const acao: any = req.query
    const service = new AcoesService()
    const response = await service.search(acao)
    if (response.success == false) {
        res.status(400).json(response)
    } else {
        res.status(200).json(response)
    }
}

//edit
export const acoesEditController = async (req: Request, res: Response) => {
    const acaoId: number = parseInt(req.params.id)
    const grupo: AcoesInterface = req.body

    const service = new AcoesService()
    const response = await service.edit(acaoId, grupo)
    if (response.success == false) {
        res.status(400).json(response)
    } else {
        res.status(200).json(response)
    }
}

//delte
export const acoesDeleteController = async (req: Request, res: Response) => {
    const acaoId = parseInt(req.params.id)

    try {
        const service = new AcoesService()
        const response = await service.deleteAcao(acaoId)
        if (response != undefined || response != null) {
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