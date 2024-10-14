import { DeleteResult } from "typeorm"
import { AcoesEntity } from "../../database/entity/acoesEntity"
import { AcoesRepository } from "../repositories/acoes.repositories"
import { AcoesInterface, AcoesResultInterface } from "../interfaces/acoes.interface"

export class AcoesService {
    private repo: AcoesRepository

    constructor() {
        this.repo = new AcoesRepository()
    }

    /**
        * Adiciona um novo registro.
        * @param acoes - Dados  que serão adicionados
        * @returns Resultado da operação
    */
    async add(acoes: AcoesEntity): Promise<AcoesResultInterface> {
        try {
            const createAcoes = await this.repo.create(acoes)
            return {
                success: true,
                message: 'Registro cadastrado com sucesso!',
                data: createAcoes
            }
        } catch (error) {
            if ((error as any).code === 'ER_DUP_ENTRY') {
                return {
                    success: false,
                    error: (error as any).code,
                    message: 'os dados informados já estão em uso',
                }
                //tratar outros possíveis erros se necessário
            }
            //exceção para o erro não tratado
            return {
                success: false,
                message: 'Erro ao adicionar registro!',
                error: error as any
            }
        }
    }
    /**
        * Busca uma Entidade.
        * @param queryParameter - Parametro da consulta
        * @returns retorno da consulta
   */

    async search(queryParameter: { [key: string]: string }): Promise<AcoesResultInterface> {
        const arrParameters = Object.keys(queryParameter)
        const parameter = arrParameters[0]
        const valorParameter = queryParameter[parameter]

        const searchGrupo = await this.repo.search({ [parameter]: valorParameter })
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
        * Edita uma Entidade.
        * @param parm - Parametro da consulta
        * @returns retorno da consulta
    */

    async edit(acoesId: number, acoes: AcoesInterface): Promise<AcoesResultInterface> {

        try {
            const editAcoes = await this.repo.edit({ 'acao_id': acoesId }, acoes)
            return {
                success: true,
                message: 'Registro alterado com sucesso!',
                data: editAcoes
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
        * Deleta um registros.
        * @param parm - Parametro da consulta
        * @returns retorno da consulta
    */
    async deleteAcao(acao_id: number) {
        try {
            const deleteItem: DeleteResult | Error = await this.repo.delete({ acao_id: acao_id })

            if (deleteItem instanceof Error) {
                return {
                    success: false,
                    status: 400,
                    message: 'Erro ao deletar registro',
                    error: deleteItem
                }
            }

            if (!deleteItem.affected || deleteItem.affected === 0) {
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