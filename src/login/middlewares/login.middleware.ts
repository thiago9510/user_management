import { Request, Response, NextFunction } from "express";
import { BodyValidator } from "../../dataValidation/services/generalValidation";
import { loginSchema } from "../schemas/login.schemas";

export const authenticateLoginMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const validator = new BodyValidator(loginSchema)
    const returnValidator = validator.validate(req.body)
    if (!returnValidator.success) {
        res.status(400).json({
            sucess: false,
            message: returnValidator.message
        })
    } else {
        next()    
    }
}