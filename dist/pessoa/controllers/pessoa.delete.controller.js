"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoaDeleteController = void 0;
const pessoa_service_1 = require("../services/pessoa.service");
const pessoaDeleteController = async (req, res) => {
    const pessoaId = parseInt(req.params.id);
    try {
        const service = new pessoa_service_1.PessoaService(); //criar serviço igual no outro projeto
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
