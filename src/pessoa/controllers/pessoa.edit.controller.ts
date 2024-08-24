import { Request, Response, NextFunction } from "express"
import { PessoaAddInterface } from "../interfaces/pessoa.add.interface"
import { PessoaService } from "../services/pessoa.service"

export const pessoaEditController = async (req: Request, res: Response) => {    
    const pessoaId: number = parseInt(req.params.id)    
    const pessoa: PessoaAddInterface = req.body 

    const service = new PessoaService()
    const response = await service.editPessoa(pessoaId, pessoa)
    if (response.success == false){
        res.status(400).json(response)
    }else {
        res.status(200).json(response)
    }    
}