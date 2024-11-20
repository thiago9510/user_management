
import { LoginInterface, LoginResultInterface } from "../interfaces/login.interface";
import { UsuarioRepository } from "../../usuario/repositories/usuario.repositories";
import { LoginRepository } from "../repositories/login.repositories";
import { CryptoData } from "../../utility/bcrypt/cryptoData";
import { sign } from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

export class LoginService {
    private repoLogin: LoginRepository   

    constructor() {
        this.repoLogin = new LoginRepository()        
    }

    /**
    *Método para Verificar gerar autenticação/token.
    *       
    * @param {LoginInterface} usuario - Recebe
    * @returns {Promise<token>} - retorna token
    * @throws {Error} - Lança um erro em caso de falha
    */
    async authenticate(usuario: LoginInterface): Promise<LoginResultInterface> {
        try {
            const login = await this.repoLogin.searchLogin({ usuario_login: usuario.usuario_login })
            const secretJWT: string | undefined = process.env.SECRET_JWT_KEY      
            if (!secretJWT) {
                return {
                    success: false,
                    message: 'Erro Interno do Servidor: Variável SECRET_JWT_KEY Não definida'
                }
            }    
            if (login instanceof Error) {
                return {
                    success: false,
                    message: 'Erro ao Consultar login',
                    error: login
                }
            } else {
                if (login.usuario_password) {
                    //verifica senha com retorno do usuario
                    const verifcaSenha = await new CryptoData().verify(usuario.usuario_password, login.usuario_password)
                    if (!verifcaSenha) {
                        return {
                            success: false,
                            message: 'Senha Inválida'
                        }
                    } else {
                        //Implementar os modulos que o usuário tem acesso para o controle do frond
                        const token = sign({ sub: String(login.usuario_id), permissions: login.usuario_status }, secretJWT, {
                            expiresIn: '3h'
                        })
                        delete login.usuario_password //removendo a senha do retorno
                        return {
                            success: true,
                            token: token,
                        }
                    }
                } else {
                    return {
                        success: false,
                        message: 'Senha Não Informada'
                    }
                }
            }
        } catch (error) {
            return {
                success: false,
                message: 'Login não Localizado',
                error: error as Error
            }
        }
    }

}

