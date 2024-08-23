"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoaEditController = void 0;
const pessoa_service_1 = require("../services/pessoa.service");
const pessoaEditController = async (req, res) => {
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
exports.pessoaEditController = pessoaEditController;
