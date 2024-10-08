import { DeleteResult, QueryFailedError, Repository, Like } from "typeorm";
import { databaseConnection } from "../../database/connection/connect";
import { gruposusuariosEntity } from "../../database/entity/gruposUsuariosEntity";
import { SingleUserProperty } from "../interfaces/grupoUsuarios.interface";

/**
 *Classe responsável por Integrar com a entidade gruposusuariosEntity
*/
export class GrupoUsuariosRepository {
    private repository: Repository<gruposusuariosEntity>

    constructor() {
        this.repository = databaseConnection.getRepository(gruposusuariosEntity)
    }

    /**
        *Método para Adicionar Usuario.
        *       
        * @param {gruposusuariosEntity} GrupoUsuarios - Recebe
        * @returns {Promise<gruposusuariosEntity>} - retorna Grupo de usuarios Criado
        * @throws {Error} - Lança um erro em caso de falha
    */
    async create(GrupoUsuarios: gruposusuariosEntity): Promise<gruposusuariosEntity | Error> {
        try {
            const execSQL = await this.repository.save(GrupoUsuarios)
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
   * Método para Consultar Registros da entidade GrupoUsuarios
   * @param {U} [el={}] - Pode receber um Objeto de consulta ou vazio (Partial<T>)
   * @returns {Promise<[]>} - retorna Objeto(s) da Consulta ou erro.
   */
    async search(el: {} | any): Promise<gruposusuariosEntity[] | Error> {
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
    *Método para Adicionar Usuario.
   * 
   * @param {Object} query - Recebe   
   * @param {UsuarioEntity} pessoa - Recebe
   * @returns {Promise<UsuarioEntity>} - retorna grupoUsuario editado
   * @throws {Error} - Lança um erro em caso de falha
   */
    async edit(query: SingleUserProperty<gruposusuariosEntity>, grupoUsuarios: gruposusuariosEntity): Promise<gruposusuariosEntity | Error> {
        try {
            const queryReturn: gruposusuariosEntity[] = await this.repository.find(
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
                const mergeEdit = await this.repository.merge(queryReturn[0], grupoUsuarios)
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
    * Método para Deletar Grupo de Usuario.
    *       
    * @param { Partial<PessoaEntity>} [query] - Recebe um critério de busca
    * @returns {Promise<DeleteResult | Error>} - retorna um DeleteResult ou erro.
    */
    async delete(query: Partial<gruposusuariosEntity>): Promise<DeleteResult | Error> {
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
