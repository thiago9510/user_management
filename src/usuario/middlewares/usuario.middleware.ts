import { Request, Response, NextFunction } from "express"
import { BodyValidator } from "../../dataValidation/services/generalValidation"
import { usuarioSchemas } from "../schemas/usuario.schemas"
import { ArrayParameterValidation } from "../../dataValidation/services/generalArrayValidation"


//import { PessoaAddInterface } from "../interfaces/pessoa.interface"

//create
export const usuarioAddMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const validator = new BodyValidator(usuarioSchemas)
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
export const usuarioSearchMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const parameters = req.query    
    const pessoaParametersValid = ['usuario_id', 'usuario_login', 'usuario_status', 'pessoa_id']
    const validatorQParm = new ArrayParameterValidation(pessoaParametersValid)
    const returnValidation = validatorQParm.check(parameters)
    if(returnValidation.success == false){        
        res.status(400).json(returnValidation)
    }else{ 
        next()            
    }
}