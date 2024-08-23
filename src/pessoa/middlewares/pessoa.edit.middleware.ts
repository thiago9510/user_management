import { Request, Response, NextFunction } from "express"

import { pessoasSchemas } from "../schemas/pessoa.add.schemas"
import { BodyValidator } from "../../dataValidation/services/generalValidation"
import { PessoaAddInterface } from "../interfaces/pessoa.add.interface"

export const pessoaEditMiddlewar = async (req: Request, res: Response, next: NextFunction) => {
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
