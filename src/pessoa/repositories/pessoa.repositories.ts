import { DeleteResult, QueryFailedError, Repository } from "typeorm";
import { databaseConnection } from "../../database/connection/connect";
import { PessoaEntity } from "../../database/entity/pessoasEntity";
import { QueryFailedPessoaError } from "../interfaces/pessoa.interface";
import { SinglePessoaProperty } from "../interfaces/pessoa.interface";

/**
 *Classe responsável por Integrar com a entidade PessoaEntity
*/
export class PessoaRepository {
    private repository: Repository<PessoaEntity>

    constructor() {
        this.repository = databaseConnection.getRepository(PessoaEntity)
    }

    /**
     *Método para Adicionar Pessoa.
      *       
      * @param {PessoaEntity} pessoa - Recebe
      * @returns {Promise<PessoaEntity>} - retorna a pessoa criada
      * @throws {Error} - Lança um erro em caso de falha
    */
    async create(pessoa: PessoaEntity): Promise<PessoaEntity | Error> {
        try {
            const execSQL = await this.repository.save(pessoa)
            return execSQL
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw {
                    name: error.name,
                    code: (error as any).code,
                    message: error.message
                }
            } else {
                throw {
                    name: 'Erro ao salvar Registro!',
                    message: error
                }
            }
        }
    }

    /**
    * Método para Consultar Registros de uma Entidade    
    * @param {U} [el={}] - Pode receber um Objeto de consulta ou vazio (Partial<T>)
    * @returns {Promise<[]>} - retorna Objeto(s) da Consulta ou erro.
    */
    async search(el: {} | any): Promise<PessoaEntity[] | Error> {
        try {
            const isEmpty = (obj: object) => Object.keys(obj).length === 0
            const response = isEmpty(el) ? this.repository.find() : this.repository.find({ where: el })
            return await response
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw {
                    name: error.name,
                    message: error.message
                }
            } else {
                throw {
                    name: 'Erro ao consultar Registro!',
                    message: error
                }
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
    async edit(query: SinglePessoaProperty<PessoaEntity>, pessoa: PessoaEntity): Promise<PessoaEntity | Error> {
        try {
            const queryReturn: PessoaEntity[] = await this.repository.find({ where: query })

            if (queryReturn.length != 1) {
                throw {
                    name: 'Invalid Parameter',
                    message: 'Invalid ID or not found'
                }
            } else {
                const mergeEdit = await this.repository.merge(queryReturn[0], pessoa)
                const saveEdit = await this.repository.save(mergeEdit)
                return saveEdit
            }
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw {
                    name: error.name,
                    code: (error as any).code,
                    message: error.message
                }
            } else {
                throw {
                    name: 'Erro ao salvar Registro!',
                    message: error
                }
            }
        }
    }

    /**
    * Método para Deletar instâncias de InstanciasUniversaEntity.
    *       
    * @param { Partial<PessoaEntity>} [query] - Recebe um critério de busca
    * @returns {Promise<DeleteResult | Error>} - retorna um DeleteResult ou erro.
    */
    async delete(query: Partial<PessoaEntity>): Promise<DeleteResult | Error> {
        try {
            const response = await this.repository.delete(query)            
            return response
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw {
                    name: error.name,
                    message: error.message
                }
            } else {
                throw {
                    name: 'Erro ao consultar Registro!',
                    message: error
                }
            }
        }
    }
}
