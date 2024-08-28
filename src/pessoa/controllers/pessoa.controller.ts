import { Request, Response, NextFunction } from "express"
import { PessoaService } from "../services/pessoa.service"
import { PessoaAddInterface } from "../interfaces/pessoa.interface"


//Create
export const pessoaAddController = async (req: Request, res: Response) => {    
    const pessoa: PessoaAddInterface = req.body
    const service = new PessoaService()
    const response = await service.addPessoa(pessoa) 
    if (response.success == false){
        res.status(400).json(response)
    }else {
        res.status(200).json(response)
    }    
}

//read
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

//update
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

//delte
export const pessoaDeleteController = async (req: Request, res: Response) => {
    const pessoaId = parseInt(req.params.id)
    
    try {
        const service = new PessoaService()
        const response = await service.deletePessoa(pessoaId)
        return res.status(200).json({
            sucess: true,
            menssagem: response
        })
    } catch (error) {
        return res.status(400).json({
            sucess: false,
            menssagem: error
        })
    }
}