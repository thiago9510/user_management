import { Request, Response, NextFunction } from "express"

import { PessoaService } from "../services/pessoa.service"

export const pessoaSearchController = async (req: Request, res: Response) => {    

    //ajustar para realizar o search
    const pessoa: any = req.query
    const service = new PessoaService()
    const response = await service.searchPessoa(pessoa)     
    if(response.success == false){
        res.status(400).json(response)
    }else{        
        res.status(200).json(response)
    }
}