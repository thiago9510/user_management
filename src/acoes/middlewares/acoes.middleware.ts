import { Request, Response, NextFunction } from "express"
import { BodyValidator } from "../../dataValidation/services/generalValidation"
import { AcoesEditSchemas, AcoesSchemas } from "../schemas/acoes.schemas"
import { ArrayParameterValidation } from "../../dataValidation/services/generalArrayValidation"
import { AcoesInterface } from "../interfaces/acoes.interface"

//create middleware
export const acoesAddMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const validator = new BodyValidator(AcoesSchemas)
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
export const acoesSearchMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const parameters = req.query
    const AcaoParametersValid = ['acao_id', 'acao_nome', 'acao_rota', 'modulo', 'chave', 'acao_descricao']
    const validatorQParm = new ArrayParameterValidation(AcaoParametersValid)
    const returnValidation = validatorQParm.check(parameters)
    if (returnValidation.success == false) {
        res.status(400).json(returnValidation)
    } else {
        next()
    }    
}

//edit
export const acoesEditMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const grupoId: string = req.params.id
    const grupo: AcoesInterface = req.body

    const isNumeric = (param: string) => {
        return /^[0-9]+$/.test(param)
    }

    if (!grupoId || !isNumeric(grupoId)) {
        return res.status(400).json({
            sucess: false,
            message: 'parametro não aceito'
        })
    }

    const validator = new BodyValidator(AcoesEditSchemas)
    const returnValidation = validator.validate(grupo)   

    if (!returnValidation.success) {
        return res.status(400).json({            
            sucess: false,
            message: 'Dados Inválidos'
        })
    }
    next()
}

//delete
export const AcoesDeleteMiddleware =  async (req: Request, res: Response, next: NextFunction) => {
    const acaoId: string = req.params.id
    const isNumeric = (param: string) => {
        return /^[0-9]+$/.test(param)
    }

    if (!acaoId || !isNumeric(acaoId)) {
        return res.status(400).json({
            success: false,
            message: 'invalid id!'
        })
    }
    next()
}