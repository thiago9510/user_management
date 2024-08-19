"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoaAddController = void 0;
const pessoa_service_1 = require("../services/pessoa.service");
const pessoaAddController = async (req, res) => {
    const pessoa = req.body;
    const service = new pessoa_service_1.PessoaService();
    const response = await service.addPessoa(pessoa);
    if (response.success == false) {
        res.status(400).json(response);
    }
    else {
        res.status(200).json(response);
    }
};
exports.pessoaAddController = pessoaAddController;
