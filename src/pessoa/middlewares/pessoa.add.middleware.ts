import { Request, Response, NextFunction } from "express"
import { BodyValidator } from "../../dataValidation/services/generalValidation"
import { pessoasSchemas } from "../schemas/pessoa.add.schemas"

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
