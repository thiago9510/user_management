"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoaSearchController = void 0;
const pessoa_service_1 = require("../services/pessoa.service");
const pessoaSearchController = async (req, res) => {
    //ajustar para realizar o search
    const pessoa = req.query;
    const service = new pessoa_service_1.PessoaService();
    const response = await service.searchPessoa(pessoa);
    if (response.success == false) {
        res.status(400).json(response);
    }
    else {
        res.status(200).json(response);
    }
};
exports.pessoaSearchController = pessoaSearchController;
