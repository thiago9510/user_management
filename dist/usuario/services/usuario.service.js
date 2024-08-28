"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const usuario_repositories_1 = require("../repositories/usuario.repositories");
class UsuarioService {
    constructor() {
        this.repoUsuario = new usuario_repositories_1.UsuarioRepository();
    }
    /**
        * Adiciona um novo usuario.
        * @param usuario - Dados do usuario a ser adicionado
        * @returns Resultado da operação
    */
    async addUsuario(usuario) {
        try {
            const createUsuario = await this.repoUsuario.create(usuario);
            return {
                success: true,
                message: 'Registro adicionado com sucesso!',
                data: createUsuario
            };
        }
        catch (error) {
            return {
                success: false,
                message: 'Erro ao adicionar registro!',
                error: error
            };
        }
    }
}
exports.UsuarioService = UsuarioService;
