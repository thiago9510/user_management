"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const typeorm_1 = require("typeorm");
const connect_1 = require("../../database/connection/connect");
const usuariosEntity_1 = require("../../database/entity/usuariosEntity");
/**
 *Classe responsável por Integrar com a entidade UsuarioEntity
*/
class UsuarioRepository {
    constructor() {
        this.repository = connect_1.databaseConnection.getRepository(usuariosEntity_1.UsuarioEntity);
    }
    /**
     *Método para Adicionar Usuario.
      *
      * @param {UsuarioEntity} usuario - Recebe
      * @returns {Promise<UsuarioEntity>} - retorna usuario criada
      * @throws {Error} - Lança um erro em caso de falha
    */
    async create(usuario) {
        try {
            console.log(usuario);
            usuario.pessoa_id = { pessoa_id: usuario.pessoa_id }; //necessário para associar o parametro do id ao pessoa_id e o typeorm reconhecer
            console.log(usuario);
            const execSQL = await this.repository.save(usuario);
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
}
exports.UsuarioRepository = UsuarioRepository;
