import { DeleteResult, QueryFailedError, Repository, Like } from "typeorm";
import { AcoesEntity } from "../../database/entity/acoesEntity";
import { databaseConnection } from "../../database/connection/connect";
import { SingleUserProperty } from "../interfaces/acoes.interface"; 

/**
 *Classe responsável por Integrar com a entidade gruposusuariosEntity
*/
export class AcoesRepository {
    private repository: Repository<AcoesEntity>

    constructor() {
        this.repository = databaseConnection.getRepository(AcoesEntity)
    }

    /**
        *Método para Adicionar Acoes.
        *       
        * @param {AcoesEntity} acoes - Recebe
        * @returns {Promise<AcoesEntity>} - retorna Acoes Criadas
        * @throws {Error} - Lança um erro em caso de falha
    */
    async create(acoes: AcoesEntity): Promise<AcoesEntity | Error> {
        try {
            const saveAcoes = await this.repository.save(acoes)
            return saveAcoes
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
        * Método para Consultar Registros da entidade Acoes
        * @param {U} [el={}] - Pode receber um Objeto de consulta ou vazio (Partial<T>)
        * @returns {Promise<[]>} - retorna Objeto(s) da Consulta ou erro.
   */
    async search(el: {} | any): Promise<AcoesEntity[] | Error> {
        try {
            const isEmpty = (obj: object) => Object.keys(obj).length === 0
            const [[key, value]] = Object.entries(el)
            const response = isEmpty(el) ? this.repository.find() : this.repository.find({
                where: {
                    [key]: Like(`%${value}%`)
                }
            })
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
        * Método para Adicionar Usuario.
        * 
        * @param {Object} query - Recebe   
        * @param {AcoesEntity} acoes - Recebe
        * @returns {Promise<AcoesEntity>} - retorna acoes editado
        * @throws {Error} - Lança um erro em caso de falha
   */
    async edit(query: SingleUserProperty<AcoesEntity>, acoes: AcoesEntity): Promise<AcoesEntity | Error> {
        try {
            const queryReturn: AcoesEntity[] = await this.repository.find(
                {
                    where: query
                }
            )

            if (queryReturn.length != 1) {
                throw {
                    name: 'Invalid Parameter',
                    message: 'Invalid ID or not found'
                }
            } else {
                const mergeEdit = await this.repository.merge(queryReturn[0], acoes)
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
        * Método para Deletar Acoes.
        *       
        * @param { Partial<AcoesEntity>} [query] - Recebe um critério de busca
        * @returns {Promise<DeleteResult | Error>} - retorna um DeleteResult ou erro.
    */
    async delete(query: Partial<AcoesEntity>): Promise<DeleteResult | Error> {
        try {
            const response = await this.repository.delete(query)
            return response
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw {
                    name: error.name,
                    code: (error as any).code,
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

