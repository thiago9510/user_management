import { Request, Response, NextFunction } from "express"

export const pessoaDeleteMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const pessoaId: string = req.params.id
    console.log(pessoaId)
    const isNumeric = (param: string) => {
        return /^[0-9]+$/.test(param)
    }

    if (!pessoaId || !isNumeric(pessoaId)) {
        return res.status(400).json({
            success: false,
            message: 'invalid id!'
        })
    }
    next()
}