import { Request, Response, NextFunction } from "express"
import { BodyValidator } from "../../dataValidation/services/generalValidation"
import { usuarioSchemas } from "../schemas/usuario.schemas"
import { ArrayParameterValidation } from "../../dataValidation/services/generalArrayValidation"
import { UsuarioService } from "../services/usuario.service"
import { UsuarioInterface } from "../interfaces/usuario.interface"



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
    if (returnValidation.success == false) {
        res.status(400).json(returnValidation)
    } else {
        next()
    }    
    
}

//edit
export const usuarioEditMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const usuarioId: string = req.params.id
    const usuario: UsuarioInterface = req.body

    const isNumeric = (param: string) => {
        return /^[0-9]+$/.test(param)
    }

    if (!usuarioId || !isNumeric(usuarioId)) {
        return res.status(400).json({
            sucess: false,
            message: 'parametro não aceito'
        })
    }

    const validator = new BodyValidator(usuarioSchemas)
    const returnValidation = validator.validate(usuario)    
    if (!returnValidation.success) {
        return res.status(400).json({
            sucess: false,
            message: 'Dados Inválidos'
        })
    }
    next()
}

//delete
export const usuarioDeleteMiddleware =  async (req: Request, res: Response, next: NextFunction) => {
    const usuarioId: string = req.params.id
    const isNumeric = (param: string) => {
        return /^[0-9]+$/.test(param)
    }

    if (!usuarioId || !isNumeric(usuarioId)) {
        return res.status(400).json({
            success: false,
            message: 'invalid id!'
        })
    }
    next()
}