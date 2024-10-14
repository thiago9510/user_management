import { DeleteResult, Like, QueryFailedError, Repository } from "typeorm";
import { databaseConnection } from "../../database/connection/connect";
import { RelGruposAcaoEntity } from "../../database/entity/relGrupoAcoesEntity";
import { SingleRelGruposAcaoProperty } from "../interfaces/relGrupoAcao.interface";

/**
 *Classe responsável por interagir com a entidade relGrupoAcao
*/
export class RelGrupoAcaoRepository {
    private repository: Repository<RelGruposAcaoEntity>

    constructor() {
        this.repository = databaseConnection.getRepository(RelGruposAcaoEntity)
    }

    /**
        *Método para Adicionar Entidade.
        *       
        * @param {RelGruposAcaoEntity} RelGrupoAcao - Recebe
        * @returns {Promise<RelGruposAcaoEntity>} - retorna 
        * @throws {Error} - Lança um erro em caso de falha
    */
    async create(RelGrupoAcao: RelGruposAcaoEntity): Promise<RelGruposAcaoEntity | Error> {
        try {
            const execSQL = await this.repository.save(RelGrupoAcao)
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
        * Método para Consultar Registros da entidade 
        * @param {U} [el={}] - Pode receber um Objeto de consulta ou vazio (Partial<T>)
        * @returns {Promise<[]>} - retorna Objeto(s) da Consulta ou erro.
    */
    async search(el: {} | any): Promise<RelGruposAcaoEntity[] | Error> {
        try {
            const isEmpty = (obj: object) => Object.keys(obj).length === 0
            const [[key, value]] = Object.entries(el)
            const response = isEmpty(el) ? this.repository.find() : this.repository.find(
                {
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
        *Método para Editar um registros.
        * 
        * @param {Object} query - Recebe   
        * @param {RelGruposAcaoEntity} RelGruposAcao - Recebe
        * @returns {Promise<RelGruposAcaoEntity>} - retorna editada
        * @throws {Error} - Lança um erro em caso de falha
    */
    async edit(query: SingleRelGruposAcaoProperty<RelGruposAcaoEntity>, RelGruposAcao: RelGruposAcaoEntity): Promise<RelGruposAcaoEntity | Error> {
        try {
            const queryReturn: RelGruposAcaoEntity[] = await this.repository.find(
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
                const mergeEdit = await this.repository.merge(queryReturn[0], RelGruposAcao)
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
        * Método para Deletar registro.
        *       
        * @param { Partial<RelGruposAcaoEntity>} [query] - Recebe um critério de busca
        * @returns {Promise<DeleteResult | Error>} - retorna um DeleteResult ou erro.
    */
    async delete(query: Partial<RelGruposAcaoEntity>): Promise<DeleteResult | Error> {
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