"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaRepository = void 0;
const typeorm_1 = require("typeorm");
const connect_1 = require("../../database/connection/connect");
const pessoasEntity_1 = require("../../database/entity/pessoasEntity");
/**
 *Classe responsável por Integrar com a entidade PessoaEntity
*/
class PessoaRepository {
    constructor() {
        this.repository = connect_1.databaseConnection.getRepository(pessoasEntity_1.PessoaEntity);
    }
    /**
     *Método para Adicionar Pessoa.
      *
      * @param {PessoaEntity} pessoa - Recebe
      * @returns {Promise<PessoaEntity>} - retorna a pessoa criada
      * @throws {Error} - Lança um erro em caso de falha
    */
    async create(pessoa) {
        try {
            const execSQL = await this.repository.save(pessoa);
            return execSQL;
        }
        catch (error) {
            if (error instanceof typeorm_1.QueryFailedError) {
                throw {
                    name: error.name,
                    message: error.message
                };
            }
            else {
                throw {
                    name: 'Erro ao salvar Registro!',
                    message: error
                };
            }
        }
    }
    /**
    * Método para Consultar Registros de uma Entidade
    * @template U - O tipo parcial dos critérios de busca.
    * @param {U} [el={}] - Pode receber um Objeto de consulta ou vazio (Partial<T>)
    * @returns {Promise<[]>} - retorna um Objeto consultado, Todos ou erro.
    */
    async search(el) {
        try {
            const isEmpty = (obj) => Object.keys(obj).length === 0;
            const response = isEmpty(el) ? this.repository.find() : this.repository.find({ where: el });
            return await response;
        }
        catch (error) {
            if (error instanceof typeorm_1.QueryFailedError) {
                throw {
                    name: error.name,
                    message: error.message
                };
            }
            else {
                throw {
                    name: 'Erro ao consultar Registro!',
                    message: error
                };
            }
        }
    }
    /**
 *Método para Adicionar Pessoa.
  *
  * @param {Object} query - Recebe
  * @param {PessoaEntity} pessoa - Recebe
  * @returns {Promise<PessoaEntity>} - retorna a pessoa editada
  * @throws {Error} - Lança um erro em caso de falha
*/
    async edit(query, pessoa) {
        try {
            const queryReturn = await this.repository.find({ where: query });
            if (queryReturn.length != 1) {
                throw {
                    name: 'Invalid Parameter',
                    message: 'Id Inválido ou não localizado'
                };
            }
            else {
                const mergeEdit = await this.repository.merge(queryReturn[0], pessoa);
                const saveEdit = await this.repository.save(mergeEdit);
                return saveEdit;
            }
        }
        catch (error) {
            if (error instanceof typeorm_1.QueryFailedError) {
                if (error.message.includes('ER_DUP_ENTRY')) {
                    throw {
                        name: 'Duplicate data',
                        message: 'The Email or CPF is already registered in the system for another user'
                    };
                }
                throw {
                    name: error.name,
                    message: error.message
                };
            }
            else {
                throw error;
            }
        }
    }
}
exports.PessoaRepository = PessoaRepository;
