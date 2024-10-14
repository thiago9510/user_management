import { Request, Response, NextFunction } from "express"
import { BodyValidator } from "../../dataValidation/services/generalValidation"
import { ArrayParameterValidation } from "../../dataValidation/services/generalArrayValidation"
import { RelGrupoAcaoEditSchemas, RelGrupoAcaoSchemas } from "../schemas/relGrupoAcao.schemas"
import { RelGruposAcaoInterface } from "../interfaces/relGrupoAcao.interface"

//create
export const relGrupoAcaoAddMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const validator = new BodyValidator(RelGrupoAcaoSchemas)
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
export const relGrupoAcaoSearchMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const parameters = req.query
    const parametersValid = ['rel_grupo_acoes_id', 'grupo_id', 'acao_id']
    const validatorQParm = new ArrayParameterValidation(parametersValid)
    const returnValidation = validatorQParm.check(parameters)
    if (returnValidation.success == false) {
        res.status(400).json(returnValidation)
    } else {
        next()
    }
}

//edit
export const relGrupoAcaoEditMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const relGruposAcaoId: string = req.params.id
    const relGruposAcao: RelGruposAcaoInterface = req.body

    const isNumeric = (param: string) => {
        return /^[0-9]+$/.test(param)
    }

    if (!relGruposAcaoId || !isNumeric(relGruposAcaoId)) {
        return res.status(400).json({
            sucess: false,
            message: 'parametro não aceito'
        })
    }

    const validator = new BodyValidator(RelGrupoAcaoEditSchemas)
    const returnValidation = validator.validate(relGruposAcao)   

    if (!returnValidation.success) {
        return res.status(400).json({            
            sucess: false,
            message: 'Dados Inválidos'
        })
    }
    next()
}

//delete
export const relGrupoAcaoDeleteMiddleware =  async (req: Request, res: Response, next: NextFunction) => {
    const relGrupoAcaoId: string = req.params.id
    const isNumeric = (param: string) => {
        return /^[0-9]+$/.test(param)
    }

    if (!relGrupoAcaoId || !isNumeric(relGrupoAcaoId)) {
        return res.status(400).json({
            success: false,
            message: 'invalid id!'
        })
    }
    next()
}