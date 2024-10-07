import { Request, Response, NextFunction } from "express"
import { BodyValidator } from "../../dataValidation/services/generalValidation"
import { ArrayParameterValidation } from "../../dataValidation/services/generalArrayValidation"
import { pessoasSchemas } from "../schemas/pessoa.schemas"
import { PessoaAddInterface } from "../interfaces/pessoa.interface"


//create
export const pessoaAddMiddlewar = async (req: Request, res: Response, next: NextFunction) => {
    const validator = new BodyValidator(pessoasSchemas)
    const returnValidation = validator.validate(req.body)    
    if (!returnValidation.success) {
        res.status(400).json({
            sucess: false,
            message: returnValidation.message
        })
    } else {    
        next()
    }
}

//read
export const pessoaSearchMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const parameters = req.query
    const pessoaParametersValid = ['pessoa_id', 'pessoa_nome', 'pessoa_cpf', 'pessoa_email']
    const validatorQParm = new ArrayParameterValidation(pessoaParametersValid)
    const returnValidation = validatorQParm.check(parameters)
    if(returnValidation.success == false){        
        res.status(400).json(returnValidation)
    }else{ 
        next()            
    }
}

//edit
export const pessoaEditMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const pessoaId: string = req.params.id
    const pessoa: PessoaAddInterface = req.body

    const isNumeric = (param: string) => {
        return /^[0-9]+$/.test(param)
    }

    if (!pessoaId || !isNumeric(pessoaId)) {
        return res.status(400).json({
            sucess: false,
            message: 'parametro não aceito'
        })
    }
    
    const validator = new BodyValidator(pessoasSchemas)
    const returnValidation = validator.validate(pessoa)
    if (!returnValidation.success) {
        return res.status(400).json({
            sucess: false,
            message: 'Dados Inválidos'
        })
    }
    next()
}

//delete
export const pessoaDeleteMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const pessoaId: string = req.params.id    
    const isNumeric = (param: string) => {
        return /^[0-9]+$/.test(param)
    }

    if (!pessoaId || !isNumeric(pessoaId)) {
        return res.status(400).json({
            success: false,
            message: 'invalid id!'
        })
    }
    next()
}