import { Repository } from "typeorm";
import { RelUsuariosGruposEntity } from "../../database/entity/relUsuariosGruposEntity";
import { databaseConnection } from "../../database/connection/connect";
import { UserActionsInterface } from "../interfaces/userActions.interface";


/**
 *Classe responsável por consultar as actions vinculadas aos usuarios
*/
export class UserActions {
    private repository: Repository<RelUsuariosGruposEntity>

    constructor() {
        this.repository = databaseConnection.getRepository(RelUsuariosGruposEntity)
    }

    /**
*Método para buscar as ações do usuario.
 *       
 * @param {number} usuario_id - O ID do usuário da entidade RelUsuariosGruposEntity
 * @returns {Promise<UsuarioEntity>} - retorna um usuario
 * @throws {Error} - Lança um erro em caso de falha
*/

    async searchUserActions(usuario_id: Pick<UserActionsInterface, 'usuario_id'>) {
        try {
            const builderQuery = this.repository
                .createQueryBuilder('rel__usuarios_grupos')
                .innerJoin('rel__usuarios_grupos.grupo_id', 'grupos_usuarios')
                .innerJoin('grupos_usuarios.relGrupoAcao', 'rel__grupo_acoes')
                //.innerJoin('grupos_usuarios.relGrupoAcao','rel__grupo_acoes')
                .innerJoinAndSelect('rel__grupo_acoes.relAcao', 'acoes')
                .select([
                    'acoes.acao_id AS acoes_acao_id',
                    'acoes.acao_nome AS acoes_acao_nome',
                    'acoes.acao_rota AS acoes_acao_rota',
                    'acoes.chave AS acoes_chave'
                ])
                .where('rel__usuarios_grupos.usuario_id = :id', { id: usuario_id.usuario_id })                

            const result = await builderQuery.getRawMany()
            return result

        } catch (error) {
            console.log(error)
            throw {
                name: 'Erro ao localizar as actions vinculadas ao grupo e usuário',
                message: error
            }
        }
    }
}