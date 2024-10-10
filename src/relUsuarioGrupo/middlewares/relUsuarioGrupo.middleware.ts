import { Request, Response, NextFunction } from "express"
import { BodyValidator } from "../../dataValidation/services/generalValidation"
import { ArrayParameterValidation } from "../../dataValidation/services/generalArrayValidation"
import { RelUserGrupSchemas, RelUserGrupEditSchemas } from "../schemas/relUsuarioGrupo.schemas"
import { RelUserGrupInterface } from "../interfaces/relUsuarioGrupo.interface"



//create
export const relUserGrupAddMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const validator = new BodyValidator(RelUserGrupSchemas)
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
export const relUserGrupSearchMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const parameters = req.query
    const pessoaParametersValid = ['rel_usuario_grupo_id', 'grupo_id', 'usuario_id']
    const validatorQParm = new ArrayParameterValidation(pessoaParametersValid)
    const returnValidation = validatorQParm.check(parameters)
    if (returnValidation.success == false) {
        res.status(400).json(returnValidation)
    } else {
        next()
    }        
}

//edit
export const relUserGrupEditMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const relUserGrupId: string = req.params.id
    const relUserGrup: RelUserGrupInterface = req.body

    const isNumeric = (param: string) => {
        return /^[0-9]+$/.test(param)
    }

    if (!relUserGrupId || !isNumeric(relUserGrupId)) {
        return res.status(400).json({
            sucess: false,
            message: 'parametro não aceito'
        })
    }

    const validator = new BodyValidator(RelUserGrupEditSchemas)
    const returnValidation = validator.validate(relUserGrup)   

    if (!returnValidation.success) {
        return res.status(400).json({            
            sucess: false,
            message: 'Dados Inválidos'
        })
    }
    next()
}

//delete
export const relUserGrupDeleteMiddleware =  async (req: Request, res: Response, next: NextFunction) => {
    const relUserGrupId: string = req.params.id
    const isNumeric = (param: string) => {
        return /^[0-9]+$/.test(param)
    }

    if (!relUserGrupId || !isNumeric(relUserGrupId)) {
        return res.status(400).json({
            success: false,
            message: 'invalid id!'
        })
    }
    next()
}