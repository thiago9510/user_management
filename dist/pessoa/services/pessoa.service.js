"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaService = void 0;
const pessoa_repositories_1 = require("../repositories/pessoa.repositories");
class PessoaService {
    constructor() {
        this.repoPessoa = new pessoa_repositories_1.PessoaRepository();
    }
    /**
        * Adiciona uma nova pessoa.
        * @param pessoa - Dados da pessoa a ser adicionada
        * @returns Resultado da operação
    */
    async addPessoa(pessoa) {
        try {
            const createPessoa = await this.repoPessoa.create(pessoa);
            return {
                success: true,
                message: 'Registro adicionado com sucesso!',
                data: createPessoa
            };
        }
        catch (error) {
            return {
                success: false,
                message: 'Erro ao adicionar registro!',
                error: error
            };
        }
    }
    /**
        * Busca uma pessoa.
        * @param queryParameter - Parametro da consulta
        * @returns retorno da consulta
   */
    async searchPessoa(queryParameter) {
        const arrParameters = Object.keys(queryParameter);
        const parameter = arrParameters[0];
        const valorParameter = queryParameter[parameter];
        const searchPessoa = await this.repoPessoa.search({ [parameter]: valorParameter });
        if (searchPessoa instanceof Error) {
            return {
                success: false,
                message: 'Erro ao Consultar Pessoa',
                error: searchPessoa
            };
        }
        else {
            return {
                success: true,
                message: 'Consulta realizada com sucesso!',
                data: searchPessoa
            };
        }
    }
    /**
       * Edita pessoa.
       * @param parm - Parametro da consulta
       * @returns retorno da consulta
  */
    async editPessoa(pessoaId, pessoa) {
        try {
            const editPessoa = await this.repoPessoa.edit({ 'pessoa_id': pessoaId }, pessoa);
            return {
                success: true,
                message: 'Registro alterado com sucesso!',
                data: editPessoa
            };
        }
        catch (error) {
            return {
                success: false,
                message: 'Erro ao Editar registro!',
                error: error
            };
        }
    }
}
exports.PessoaService = PessoaService;
