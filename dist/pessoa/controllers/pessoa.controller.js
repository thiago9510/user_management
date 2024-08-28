"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoaDeleteController = exports.pessoaEditController = exports.pessoaSearchController = exports.pessoaAddController = void 0;
const pessoa_service_1 = require("../services/pessoa.service");
//Create
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
//read
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
//update
const pessoaEditController = async (req, res) => {
    const pessoaId = parseInt(req.params.id);
    const pessoa = req.body;
    const service = new pessoa_service_1.PessoaService();
    const response = await service.editPessoa(pessoaId, pessoa);
    if (response.success == false) {
        res.status(400).json(response);
    }
    else {
        res.status(200).json(response);
    }
};
exports.pessoaEditController = pessoaEditController;
//delte
const pessoaDeleteController = async (req, res) => {
    const pessoaId = parseInt(req.params.id);
    try {
        const service = new pessoa_service_1.PessoaService();
        const response = await service.deletePessoa(pessoaId);
        return res.status(200).json({
            sucess: true,
            menssagem: response
        });
    }
    catch (error) {
        return res.status(400).json({
            sucess: false,
            menssagem: error
        });
    }
};
exports.pessoaDeleteController = pessoaDeleteController;
