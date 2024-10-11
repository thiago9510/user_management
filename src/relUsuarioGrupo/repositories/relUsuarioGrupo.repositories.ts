import { DeleteResult, QueryFailedError, Repository, Like } from "typeorm";
import { databaseConnection } from "../../database/connection/connect";
import { RelUsuariosGruposEntity } from "../../database/entity/relUsuariosGruposEntity"
import { SingleRelUserGrupProperty } from "../interfaces/relUsuarioGrupo.interface";
import { UsuarioEntity } from "../../database/entity/usuariosEntity";
import { gruposusuariosEntity } from "../../database/entity/gruposUsuariosEntity";

/**
 *Classe responsável por Integrar com a entidade RelUsuariosGruposEntity
*/
export class RelUserGrupRepository {
    private repository: Repository<RelUsuariosGruposEntity>

    constructor() {
        this.repository = databaseConnection.getRepository(RelUsuariosGruposEntity)
    }

    /**
     *Método para Adicionar RelUserGrup.
      *       
      * @param {RelUsuariosGruposEntity} RelUserGrup - Recebe
      * @returns {Promise<RelUsuariosGruposEntity>} - retorna RelUsuariosGruposEntity
      * @throws {Error} - Lança um erro em caso de falha
    */
    async create(RelUserGrup: RelUsuariosGruposEntity): Promise<RelUsuariosGruposEntity | Error> {
        try {           
            const execSQL = await this.repository.save(RelUserGrup)              
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
    * Método para Consultar Registros de RelUsuariosGruposEntity 
    * @param {U} [el={}] - Pode receber um Objeto de consulta ou vazio (Partial<T>)
    * @returns {Promise<[]>} - retorna Objeto(s) da Consulta ou erro.
    */
    async search(el: {} | any): Promise<RelUsuariosGruposEntity[] | Error> {
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
 *Método para Adicionar RelUserGrup.
  * 
  * @param {Object} query - Recebe   
  * @param {RelUsuariosGruposEntity} RelUserGrup - Recebe
  * @returns {Promise<RelUsuariosGruposEntity>} - retorna editada
  * @throws {Error} - Lança um erro em caso de falha
    */
    async edit(query: SingleRelUserGrupProperty<RelUsuariosGruposEntity>, RelUserGrup: RelUsuariosGruposEntity): Promise<RelUsuariosGruposEntity | Error> {
        try {
            const queryReturn: RelUsuariosGruposEntity[] = await this.repository.find(
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
                const mergeEdit = await this.repository.merge(queryReturn[0], RelUserGrup)
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
    * Método para Deletar RelUserGrup.
    *       
    * @param { Partial<RelUsuariosGruposEntity>} [query] - Recebe um critério de busca
    * @returns {Promise<DeleteResult | Error>} - retorna um DeleteResult ou erro.
    */
    async delete(query: Partial<RelUsuariosGruposEntity>): Promise<DeleteResult | Error> {
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
