"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaService = void 0;
const pessoa_repositories_1 = require("../repositories/pessoa.repositories");
const typeorm_1 = require("typeorm");
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
    /**
   * Edita pessoa.
   * @param parm - Parametro da consulta
   * @returns retorno da consulta
*/
    async deletePessoa(pessoaId) {
        try {
            const repositoryMethods = await this.repoPessoa.delete({ pessoa_id: pessoaId });
            if (repositoryMethods instanceof Error) {
                return {
                    success: false,
                    message: 'Erro ao deletar registro',
                    error: repositoryMethods
                };
            }
            if (!repositoryMethods.affected || repositoryMethods.affected === 0) {
                return {
                    success: true,
                    message: 'Nenhum Registro deletado',
                };
            }
            return {
                success: true,
                message: 'Registro deletado'
            };
        }
        catch (error) {
            if (error instanceof typeorm_1.QueryFailedError) {
                if (error.code === 'ER_ROW_IS_REFERENCED_2') {
                    return {
                        success: false,
                        message: 'A pessoa não pode ser deletada pois existem registros vinculados!',
                        error: error
                    };
                }
                return {
                    success: false,
                    message: 'Erro ao Editar registro!',
                    error: error
                };
            }
            else if (error instanceof Error) {
                return {
                    success: false,
                    message: 'Erro desconhecido ocorreu.',
                    error: error
                };
            }
            return {
                success: false,
                message: 'Ocorreu um erro inesperado.',
                error: ''
            };
        }
    }
}
exports.PessoaService = PessoaService;
