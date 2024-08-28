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