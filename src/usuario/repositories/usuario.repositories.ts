import { DeleteResult, QueryFailedError, Repository, Like } from "typeorm";
import { databaseConnection } from "../../database/connection/connect";

import { UsuarioEntity } from "../../database/entity/usuariosEntity";
import { SingleUserProperty, UsuarioInterface } from "../interfaces/usuario.interface";
import { PessoaEntity } from "../../database/entity/pessoasEntity";

/**
 *Classe responsável por Integrar com a entidade UsuarioEntity
*/
export class UsuarioRepository {
    private repository: Repository<UsuarioEntity>

    constructor() {
        this.repository = databaseConnection.getRepository(UsuarioEntity)
    }

    /**
     *Método para Adicionar Usuario.
      *       
      * @param {UsuarioEntity} usuario - Recebe
      * @returns {Promise<UsuarioEntity>} - retorna usuario criada
      * @throws {Error} - Lança um erro em caso de falha
    */
    async create(usuario: UsuarioEntity): Promise<UsuarioEntity | Error> {
        try {
            //necessário para associar o parametro do id a pessoa_id e o typeorm reconhecer               
            usuario.pessoa_id = { pessoa_id: usuario.pessoa_id } as PessoaEntity
            const execSQL = await this.repository.save(usuario)
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
    async search(el: {} | any): Promise<UsuarioEntity[] | Error> {
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
  * @returns {Promise<UsuarioEntity>} - retorna a usuario editado
  * @throws {Error} - Lança um erro em caso de falha
    */
    async edit(query: SingleUserProperty<UsuarioEntity>, usuario: UsuarioEntity): Promise<UsuarioEntity | Error> {
        try {
            const queryReturn: UsuarioEntity[] = await this.repository.find(
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
                const mergeEdit = await this.repository.merge(queryReturn[0], usuario)
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
    * Método para Deletar Usuarios.
    *       
    * @param { Partial<PessoaEntity>} [query] - Recebe um critério de busca
    * @returns {Promise<DeleteResult | Error>} - retorna um DeleteResult ou erro.
    */
    async delete(query: Partial<UsuarioEntity>): Promise<DeleteResult | Error> {
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
