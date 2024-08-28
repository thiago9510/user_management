import { DeleteResult, QueryFailedError, Repository } from "typeorm";
import { databaseConnection } from "../../database/connection/connect";

import { UsuarioEntity } from "../../database/entity/usuariosEntity";
import { UsuarioInterface } from "../interfaces/usuario.interface";
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
            usuario.pessoa_id = {pessoa_id: usuario.pessoa_id} as PessoaEntity        
            const execSQL = await this.repository.save(usuario)
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
