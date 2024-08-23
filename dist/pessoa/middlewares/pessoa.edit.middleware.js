"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoaEditMiddlewar = void 0;
const pessoa_add_schemas_1 = require("../schemas/pessoa.add.schemas");
const generalValidation_1 = require("../../dataValidation/services/generalValidation");
const pessoaEditMiddlewar = async (req, res, next) => {
    const pessoaId = req.params.id;
    const isNumeric = (param) => {
        return /^[0-9]+$/.test(param);
    };
    if (!pessoaId || !isNumeric(pessoaId)) {
        return res.status(400).json({
            sucess: false,
            message: 'parametro não aceito'
        });
    }
    const validator = new generalValidation_1.BodyValidator(pessoa_add_schemas_1.pessoasSchemas);
    const returnValidation = validator.validate(req.body);
    if (!returnValidation.success) {
        return res.status(400).json({
            sucess: false,
            message: 'Dados Inválidos'
        });
    }
    return res.status(200).json({
        sucess: false,
        message: 'parametro aceito'
    });
    //next()
};
exports.pessoaEditMiddlewar = pessoaEditMiddlewar;
