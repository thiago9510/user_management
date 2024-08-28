"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioAddMiddleware = void 0;
const generalValidation_1 = require("../../dataValidation/services/generalValidation");
const usuario_schemas_1 = require("../schemas/usuario.schemas");
//import { PessoaAddInterface } from "../interfaces/pessoa.interface"
//create
const usuarioAddMiddleware = async (req, res, next) => {
    const validator = new generalValidation_1.BodyValidator(usuario_schemas_1.usuarioSchemas);
    const returnValidation = validator.validate(req.body);
    if (!returnValidation.success) {
        res.status(400).json({
            sucess: false,
            message: returnValidation.message
        });
    }
    else {
        next();
    }
};
exports.usuarioAddMiddleware = usuarioAddMiddleware;
