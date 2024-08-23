"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoaAddMiddlewar = void 0;
const generalValidation_1 = require("../../dataValidation/services/generalValidation");
const pessoa_add_schemas_1 = require("../schemas/pessoa.add.schemas");
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
