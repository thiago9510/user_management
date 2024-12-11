import { UserActions } from "../../login/repositories/userActions.repositories";
import { AuthorizationResultInterface } from "../interfaces/authorization.Interface";

export class authorizationService {
    
        /**
    *Método para Validar permissões necessárias para acessar a rota.
    *       
    * @param {number} usuarioId - Recebe o id do usuário
    * @param {string} rotaAtual - Rota que o usuário está tentando acessar
    * @returns {Promise<AuthorizationResultInterface>} - retorna token
    * @throws {Error} - Lança um erro em caso de falha
    */

    async autorization(usuarioId: number, rotaAtual: string): Promise<AuthorizationResultInterface>{
        try {
            const searchActions = new UserActions() //chamar 
            const queryResult =  await searchActions.searchUserActions({usuario_id: usuarioId})

            //Retorna um array do resultado unificado (sem duplucação)
            const rotasPermitidas = [... new Set(queryResult.map(item => item.acoes_acao_rota))]            
            
           // Verifica se a rota atual está na lista de rotas permitidas
           if(rotasPermitidas.includes(rotaAtual)) {
            return {
                success: true,
                message: 'authorized'
            }
           } else{
            return {
                success: false,
                message: 'Access denied: unauthorized'
            }
           }
            
        } catch (error) {
            return {
                success: false,
                message: 'Erro ao validar Permissões do Usuário',
                error: error as Error
            }
        }
    }
}