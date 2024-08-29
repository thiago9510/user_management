"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const cryptoData_1 = require("../../utility/bcrypt/cryptoData");
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
            const passwordHash = await new cryptoData_1.CryptoData().create(usuario.usuario_password);
            const createUsuario = await this.repoUsuario.create({ ...usuario, usuario_password: passwordHash });
            if (!createUsuario || createUsuario instanceof Error) { //garatindo a tipagem para  o retorno de create usuario
                return {
                    success: false,
                    message: 'Erro ao adicionar registro!',
                    error: createUsuario
                };
            }
            delete createUsuario.usuario_password; //removendo a senha do retorno
            return {
                success: true,
                message: 'Usuario cadastrado com sucesso!',
                data: createUsuario
            };
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                return {
                    success: false,
                    error: error.code,
                    message: 'os dados informados já estão em uso',
                };
            }
            return {
                success: false,
                message: 'Erro ao adicionar registro!',
                error: error
            };
        }
    }
}
exports.UsuarioService = UsuarioService;
