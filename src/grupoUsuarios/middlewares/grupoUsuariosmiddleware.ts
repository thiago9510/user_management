import { Request, Response, NextFunction } from "express"
import { BodyValidator } from "../../dataValidation/services/generalValidation"
import { grupoUsuarioEditSchemas, grupoUsuarioSchemas } from "../schemas/grupoUsuarios.schemas"
import { ArrayParameterValidation } from "../../dataValidation/services/generalArrayValidation"
import { GrupoUsuariosInterface } from "../interfaces/grupoUsuarios.interface"

//create
export const grupoUsuariosAddMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const validator = new BodyValidator(grupoUsuarioSchemas)
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
export const grupoUsuariosSearchMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const parameters = req.query
    const usuarioGrupoParametersValid = ['grupo_nome', 'grupo_descricao']
    const validatorQParm = new ArrayParameterValidation(usuarioGrupoParametersValid)
    const returnValidation = validatorQParm.check(parameters)
    if (returnValidation.success == false) {
        res.status(400).json(returnValidation)
    } else {
        next()
    }    
}

//edit
export const grupoUsuariosEditMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const grupoId: string = req.params.id
    const grupo: GrupoUsuariosInterface = req.body

    const isNumeric = (param: string) => {
        return /^[0-9]+$/.test(param)
    }

    if (!grupoId || !isNumeric(grupoId)) {
        return res.status(400).json({
            sucess: false,
            message: 'parametro não aceito'
        })
    }

    const validator = new BodyValidator(grupoUsuarioEditSchemas)
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
export const grupoUsuariosDeleteMiddleware =  async (req: Request, res: Response, next: NextFunction) => {
    const grupoId: string = req.params.id
    const isNumeric = (param: string) => {
        return /^[0-9]+$/.test(param)
    }

    if (!grupoId || !isNumeric(grupoId)) {
        return res.status(400).json({
            success: false,
            message: 'invalid id!'
        })
    }
    next()
}