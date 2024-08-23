import { Request, Response, NextFunction } from "express"
import { ArrayParameterValidation } from "../../dataValidation/services/generalArrayValidation"

export const pessoaSearchMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const parameters = req.query
    const pessoaParametersValid = ['pessoa_id', 'pessoa_nome', 'pessoa_cpf', 'pessoa_email']
    const validatorQParm = new ArrayParameterValidation(pessoaParametersValid)
    const returnValidation = validatorQParm.check(parameters)
    if(returnValidation.success == false){        
        res.status(400).json(returnValidation)
    }else{ 
        next()           
        //res.status(200).json(returnValidation)        
    }
}