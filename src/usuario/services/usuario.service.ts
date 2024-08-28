import { UsuarioInterface, UsuarioResultInterface } from "../interfaces/usuario.interface"
import { UsuarioRepository } from "../repositories/usuario.repositories"

export class UsuarioService {
    private repoUsuario: UsuarioRepository

    constructor() {
        this.repoUsuario = new UsuarioRepository()
    }

    /**
        * Adiciona um novo usuario.
        * @param usuario - Dados do usuario a ser adicionado
        * @returns Resultado da operação
    */

    async addUsuario(usuario: UsuarioInterface): Promise<UsuarioResultInterface> {

        try {
            const createUsuario = await this.repoUsuario.create(usuario)
            return {
                success: true,
                message: 'Registro adicionado com sucesso!',
                data: createUsuario
            }
        } catch (error) {
            return {
                success: false,
                message: 'Erro ao adicionar registro!',
                error: error as any
            }
        }
    }
}