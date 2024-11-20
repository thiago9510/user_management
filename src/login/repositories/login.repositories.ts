import { Repository } from "typeorm";
import { UsuarioEntity } from "../../database/entity/usuariosEntity";
import { databaseConnection } from "../../database/connection/connect";
import { LoginInterface, SingleLoginProperty } from "../interfaces/login.interface";


/**
 *Classe responsável por Integrar com login
*/
export class LoginRepository {
    private repository: Repository<UsuarioEntity>

    constructor () {
        this.repository = databaseConnection.getRepository(UsuarioEntity)
    }

     /**
     *Método buscar Usuario.
      *       
      * @param {UsuarioEntity} login - Recebe
      * @returns {Promise<UsuarioEntity>} - retorna um usuario
      * @throws {Error} - Lança um erro em caso de falha
    */

     async searchLogin (login: Pick<LoginInterface, 'usuario_login'>): Promise<UsuarioEntity | Error>{
        try {
            const queryReturn = await this.repository.findOne({
                where: { usuario_login: login.usuario_login}
            })
            if(!queryReturn){
                throw new Error("Usuário não encontrado")
            }
            return queryReturn
        } catch (error) {
            throw {
                name: 'Erro ao consultar Registro!',
                message: error
            }
        }
     }
}