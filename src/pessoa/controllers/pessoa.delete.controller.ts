import { Request, Response, NextFunction } from "express"
import { pessoasSchemas } from "../schemas/pessoa.add.schemas"
import { BodyValidator } from "../../dataValidation/services/generalValidation"
import { PessoaAddInterface } from "../interfaces/pessoa.add.interface"
import { PessoaService } from "../services/pessoa.service"

export const pessoaDeleteController = async (req: Request, res: Response) => {
    const { id } = req.params

    
    try {
        const service = new PessoaService()//criar serviço igual no outro projeto
        const response = await service.deletePessoa(id)
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