import { QueryFailedError, Repository } from "typeorm";
import { databaseConnection } from "../../database/connection/connect";
import { PessoaEntity } from "../../database/entity/pessoasEntity";
import { QueryFailedPessoaError } from "../interfaces/pessoa.interface";

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
    * @template U - O tipo parcial dos critérios de busca.
    * @param {U} [el={}] - Pode receber um Objeto de consulta ou vazio (Partial<T>)
    * @returns {Promise<[]>} - retorna um Objeto consultado, Todos ou erro.
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
  * @param {PessoaEntity} pessoa - Recebe
  * @returns {Promise<PessoaEntity>} - retorna a pessoa criada
  * @throws {Error} - Lança um erro em caso de falha
*/
    async edit(pessoa: PessoaEntity): Promise<PessoaEntity | Error> {
        try {
            const execSQL = await this.repository.save(pessoa)
            return execSQL
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw {
                    name: error.name,
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
}