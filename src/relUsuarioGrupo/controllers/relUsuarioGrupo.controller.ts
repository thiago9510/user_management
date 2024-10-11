import { Request, Response, NextFunction } from "express"
import { RelUserGrupService } from "../services/relUsuarioGrupo.service"
import { RelUserGrupInterface } from "../interfaces/relUsuarioGrupo.interface"

//Create
export const relUserGrupAddController = async (req: Request, res: Response) => {
    const  relUserGrup: RelUserGrupInterface = req.body
    const service = new RelUserGrupService()    
    const response = await service.add(relUserGrup)
    if (response.success == false) {
        res.status(400).json(response)
    } else {
        res.status(200).json(response)
    }
}


//Read
export const relUserGrupSearchController = async (req: Request, res: Response) => {    
    const relUserGrup: any = req.query
    const service = new RelUserGrupService()
    const response = await service.search(relUserGrup)
    if (response.success == false) {
        res.status(400).json(response)
    } else {
        res.status(200).json(response)
    }
}

//edit
export const relUserGrupEditController = async (req: Request, res: Response) => {
    const relUserGrupId: number = parseInt(req.params.id)
    const relUserGrup: RelUserGrupInterface = req.body

    const service = new RelUserGrupService()
    const response = await service.edit(relUserGrupId, relUserGrup)
    if (response.success == false) {
        res.status(400).json(response)
    } else {
        res.status(200).json(response)
    }
}

//delte
export const relUsergrupController = async (req: Request, res: Response) => {
    const relUserGrupId = parseInt(req.params.id)

    try {
        const service = new RelUserGrupService()
        const response = await service.delete(relUserGrupId)
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