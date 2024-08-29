import { CryptoData } from "../../utility/bcrypt/cryptoData"
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
            const passwordHash = await new CryptoData().create(usuario.usuario_password)
            const createUsuario = await this.repoUsuario.create({...usuario, usuario_password: passwordHash})
            if(!createUsuario || createUsuario instanceof Error){ //garatindo a tipagem para  o retorno de create usuario
                return {
                    success: false,
                    message: 'Erro ao adicionar registro!',
                    error: createUsuario
                }
            }
            delete createUsuario.usuario_password //removendo a senha do retorno
            return {
                success: true,
                message: 'Usuario cadastrado com sucesso!',
                data: createUsuario
            }
        } catch (error) {            
            if((error as any).code === 'ER_DUP_ENTRY'){
                return {
                    success: false,
                    error: (error as any).code,
                    message: 'os dados informados já estão em uso',                    
                }
            }
            return {
                success: false,
                message: 'Erro ao adicionar registro!',
                error: error as any
            }
        }
    }

    
    /**
        * Busca um usuario.
        * @param queryParameter - Parametro da consulta
        * @returns retorno da consulta
   */

    async searchUsuario(queryParameter: { [key: string]: string }): Promise<UsuarioResultInterface> {
        const arrParameters = Object.keys(queryParameter)
        const parameter = arrParameters[0]
        const valorParameter = queryParameter[parameter]
        
        const searchUsuario = await this.repoUsuario.search({ [parameter]: valorParameter })
        if (searchUsuario instanceof Error) {
            return {
                success: false,
                message: 'Erro ao Consultar Usuario',
                error: searchUsuario
            }
        } else {
            return {
                success: true,
                message: 'Consulta realizada com sucesso!',
                data: searchUsuario
            }
        }
    }

}