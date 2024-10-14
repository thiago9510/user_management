import { DeleteResult } from "typeorm"

import { GrupoUsuariosInterface, GrupoUsuariosResultInterface } from "../interfaces/grupoUsuarios.interface"
import { GrupoUsuariosRepository } from "../repositories/grupoUsuarios.repositories"

export class GrupoUsuarioService {
    private repoGrupoUsuario: GrupoUsuariosRepository

    constructor() {
        this.repoGrupoUsuario = new GrupoUsuariosRepository()
    }

    /**
    * Adiciona um novo grupo de usuarios.
    * @param grupo - Dados do Grupo de usuarios a ser adicionado
    * @returns Resultado da operação
    */
    async addGrupo(grupo: GrupoUsuariosInterface): Promise<GrupoUsuariosResultInterface> {

        try {
            const createGrupo = await this.repoGrupoUsuario.create(grupo)
            return {
                success: true,
                message: 'Usuario cadastrado com sucesso!',
                data: createGrupo
            }
        } catch (error) {
            if ((error as any).code === 'ER_DUP_ENTRY') {
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
    * Busca um Grupo de Usuarios.
    * @param queryParameter - Parametro da consulta
    * @returns retorno da consulta
   */

    async searchGrupo(queryParameter: { [key: string]: string }): Promise<GrupoUsuariosResultInterface> {
        const arrParameters = Object.keys(queryParameter)
        const parameter = arrParameters[0]
        const valorParameter = queryParameter[parameter]

        const searchGrupo = await this.repoGrupoUsuario.search({ [parameter]: valorParameter })
        if (searchGrupo instanceof Error) {
            return {
                success: false,
                message: 'Erro ao Consultar Registro',
                error: searchGrupo
            }
        } else {
            return {
                success: true,
                message: 'Consulta realizada com sucesso!',
                data: searchGrupo
            }
        }
    }

    /**
    * Edita Grupo de Usuarios.
    * @param parm - Parametro da consulta
    * @returns retorno da consulta
    */

    async editGrupo(grupoId: number, grupo: GrupoUsuariosInterface): Promise<GrupoUsuariosResultInterface> {

        try {
            const editGrupo = await this.repoGrupoUsuario.edit({ 'grupo_id': grupoId }, grupo)
            return {
                success: true,
                message: 'Registro alterado com sucesso!',
                data: editGrupo
            }
        } catch (error) {
            if ((error as any).code === 'ER_DUP_ENTRY') {
                return {
                    success: false,
                    error: (error as any).code,
                    message: 'os dados informados já estão em uso',
                }
            }
            return {
                success: false,
                message: 'Erro ao Editar registro!',
                error: error as any
            }
        }
    }

    /**
    * Deleta Grupo de Usuarios.
    * @param parm - Parametro da consulta
    * @returns retorno da consulta
    */
    async deleteGrupo(grupoId: number) {
        try {
            const repositoryMethods: DeleteResult | Error = await this.repoGrupoUsuario.delete({ grupo_id: grupoId })

            if (repositoryMethods instanceof Error) {
                return {
                    success: false,
                    status: 400,
                    message: 'Erro ao deletar registro',
                    error: repositoryMethods
                }
            }

            if (!repositoryMethods.affected || repositoryMethods.affected === 0) {
                return {
                    success: true,
                    status: 200,
                    message: 'Nenhum Registro deletado',
                }
            }
            return {
                success: true,
                status: 200,
                message: 'Registro deletado'
            }

        } catch (error: unknown) {
            if ((error as any).name == 'QueryFailedError') {
                if ((error as any).code === 'ER_ROW_IS_REFERENCED_2') {
                    return {
                        success: false,
                        status: 409,
                        message: 'O registro não pode ser deletada pois existem registros vinculados!',
                        error: (error as any).code
                    }
                    //adicionar outros erros que queira tratar
                } else {
                    return {
                        success: false,
                        status: 400,
                        message: 'Erro ao Deletar registro',
                        error: (error as any).code
                    }
                }
            } else {
                return {
                    success: false,
                    status: 400,
                    message: 'Erro desconhecido ocorreu.',
                    error: error
                }
            }
        }
    }

}