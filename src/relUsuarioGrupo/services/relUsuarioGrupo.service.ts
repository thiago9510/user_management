import { DeleteResult, QueryFailedError } from "typeorm"
import { RelUserGrupInterface, RelUserGrupResultInterface } from "../interfaces/relUsuarioGrupo.interface"
import { RelUserGrupRepository } from "../repositories/relUsuarioGrupo.repositories"

export class RelUserGrupService {
    private repo: RelUserGrupRepository

    constructor() {
        this.repo = new RelUserGrupRepository()
    }

    /**
    * Adiciona um novo relUserGrup.
    * @param relUserGrup - Dados do relUserGrup a ser adicionado
    * @returns Resultado da operação
    */
    async add(relUserGrup: RelUserGrupInterface): Promise<RelUserGrupResultInterface> {

        try {            
            const create = await this.repo.create(relUserGrup)
            if (!create || create instanceof Error) {
                return {
                    success: false,
                    message: 'Erro ao adicionar registro!',
                    error: create
                }
            }           
            return {
                success: true,
                message: 'Registro cadastrado com sucesso!',
                data: create
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
    * Busca um relUserGrup.
    * @param queryParameter - Parametro da consulta
    * @returns retorno da consulta
   */
    async search(queryParameter: { [key: string]: string }): Promise<RelUserGrupResultInterface> {
        const arrParameters = Object.keys(queryParameter)
        const parameter = arrParameters[0]
        const valorParameter = queryParameter[parameter]

        const search = await this.repo.search({ [parameter]: valorParameter })
        if (search instanceof Error) {
            return {
                success: false,
                message: 'Erro ao Consultar Registro',
                error: search
            }
        } else {
            return {
                success: true,
                message: 'Consulta realizada com sucesso!',
                data: search
            }
        }
    }

    /**
    * Edita um relUserGrup.
    * @param parm - Parametro da consulta
    * @returns retorno da consulta
    */
    async edit(relUserGrupId: number, relUserGrup: RelUserGrupInterface): Promise<RelUserGrupResultInterface> {
        try {
            const edit = await this.repo.edit({ 'rel_usuario_grupo_id': relUserGrupId }, relUserGrup)

            if (!edit || edit instanceof Error) {
                return {
                    success: false,
                    message: 'Erro ao Editar registro!',
                    error: edit
                }
            }            
            return {
                success: true,
                message: 'Registro alterado com sucesso!',
                data: edit
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
    * Deleta relUserGrup.
    * @param parm - Parametro da consulta
    * @returns retorno da consulta
    */
    async delete(relUserGrupId: number) {
        try {
            const repositoryMethods: DeleteResult | Error = await this.repo.delete({ rel_usuario_grupo_id: relUserGrupId })

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
            if((error as any).name == 'QueryFailedError'){               
                if ((error as any).code === 'ER_ROW_IS_REFERENCED_2') {
                    return {
                        success: false,
                        status: 409,
                        message: 'A pessoa não pode ser deletada pois existem registros vinculados!',
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
            } else{
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