"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoaDeleteMiddleware = exports.pessoaEditMiddleware = exports.pessoaSearchMiddleware = exports.pessoaAddMiddlewar = void 0;
const generalValidation_1 = require("../../dataValidation/services/generalValidation");
const generalArrayValidation_1 = require("../../dataValidation/services/generalArrayValidation");
const pessoa_add_schemas_1 = require("../schemas/pessoa.add.schemas");
//create
const pessoaAddMiddlewar = async (req, res, next) => {
    const validator = new generalValidation_1.BodyValidator(pessoa_add_schemas_1.pessoasSchemas);
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
exports.pessoaAddMiddlewar = pessoaAddMiddlewar;
//read
const pessoaSearchMiddleware = (req, res, next) => {
    const parameters = req.query;
    const pessoaParametersValid = ['pessoa_id', 'pessoa_nome', 'pessoa_cpf', 'pessoa_email'];
    const validatorQParm = new generalArrayValidation_1.ArrayParameterValidation(pessoaParametersValid);
    const returnValidation = validatorQParm.check(parameters);
    if (returnValidation.success == false) {
        res.status(400).json(returnValidation);
    }
    else {
        next();
        //res.status(200).json(returnValidation)        
    }
};
exports.pessoaSearchMiddleware = pessoaSearchMiddleware;
//edit
const pessoaEditMiddleware = async (req, res, next) => {
    const pessoaId = req.params.id;
    const pessoa = req.body;
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
    const returnValidation = validator.validate(pessoa);
    if (!returnValidation.success) {
        return res.status(400).json({
            sucess: false,
            message: 'Dados Inválidos'
        });
    }
    next();
};
exports.pessoaEditMiddleware = pessoaEditMiddleware;
//delete
const pessoaDeleteMiddleware = async (req, res, next) => {
    const pessoaId = req.params.id;
    console.log(pessoaId);
    const isNumeric = (param) => {
        return /^[0-9]+$/.test(param);
    };
    if (!pessoaId || !isNumeric(pessoaId)) {
        return res.status(400).json({
            success: false,
            message: 'invalid id!'
        });
    }
    next();
};
exports.pessoaDeleteMiddleware = pessoaDeleteMiddleware;
