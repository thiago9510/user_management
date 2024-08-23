"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoaSearchMiddleware = void 0;
const generalArrayValidation_1 = require("../../dataValidation/services/generalArrayValidation");
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
