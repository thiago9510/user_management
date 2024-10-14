import { DeleteResult } from "typeorm";
import { RelGruposAcaoInterface, RelGruposAcaoResultInterface } from "../interfaces/relGrupoAcao.interface";
import { RelGrupoAcaoRepository } from "../repositories/relGrupoAcao.repositories";


export class RelGrupoAcaoService {
    private repo: RelGrupoAcaoRepository

    constructor() {
        this.repo = new RelGrupoAcaoRepository()
    }

    /**
        * Adiciona um novo relUserGrup.
        * @param relUserGrup - Dados do relUserGrup a ser adicionado
        * @returns Resultado da operação
    */
    async add(relGrupoAcao: RelGruposAcaoInterface): Promise<RelGruposAcaoResultInterface> {

        try {
            const create = await this.repo.create(relGrupoAcao)
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
        * Busca uma entidade.
        * @param queryParameter - Parametro da consulta
        * @returns retorno da consulta
    */
    async search(queryParameter: { [key: string]: string }): Promise<RelGruposAcaoResultInterface> {
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
        * Edita uma entidade.
        * @param parm - Parametro da consulta
        * @returns retorno da consulta
    */
    async edit(relGruposAcaoId: number, relGruposAcao: RelGruposAcaoInterface): Promise<RelGruposAcaoResultInterface> {
        try {
            const edit = await this.repo.edit({ 'grupo_acoes_id': relGruposAcaoId }, relGruposAcao)

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
        * Deleta uma entidade.
        * @param parm - Parametro da consulta
        * @returns retorno da consulta
    */
    async delete(relGruposAcaoId: number) {
        try {
            const repositoryMethods: DeleteResult | Error = await this.repo.delete({ grupo_acoes_id: relGruposAcaoId })

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
                        message: 'O registro não pode ser deletado pois existem registros vinculados!',
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