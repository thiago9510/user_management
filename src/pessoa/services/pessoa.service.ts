import { PessoaEntity } from "../../database/entity/pessoasEntity";
import { PessoaRepository } from "../repositories/pessoa.repositories";
import { PessoaAddInterface, PessoaResultInterface, QueryFailedPessoaError } from "../interfaces/pessoa.interface";
import { DeleteResult, QueryFailedError } from "typeorm";


export class PessoaService {
    private repoPessoa: PessoaRepository

    constructor() {
        this.repoPessoa = new PessoaRepository()
    }

    /**
        * Adiciona uma nova pessoa.
        * @param pessoa - Dados da pessoa a ser adicionada
        * @returns Resultado da operação
    */

    async addPessoa(pessoa: PessoaAddInterface): Promise<PessoaResultInterface> {

        try {
            const createPessoa = await this.repoPessoa.create(pessoa)
            return {
                success: true,
                message: 'Registro adicionado com sucesso!',
                data: createPessoa
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
        * Busca uma pessoa.
        * @param queryParameter - Parametro da consulta
        * @returns retorno da consulta
   */

    async searchPessoa(queryParameter: { [key: string]: string }): Promise<PessoaResultInterface> {
        const arrParameters = Object.keys(queryParameter)
        const parameter = arrParameters[0]
        const valorParameter = queryParameter[parameter]

        const searchPessoa = await this.repoPessoa.search({ [parameter]: valorParameter })
        if (searchPessoa instanceof Error) {
            return {
                success: false,
                message: 'Erro ao Consultar Pessoa',
                error: searchPessoa
            }
        } else {
            return {
                success: true,
                message: 'Consulta realizada com sucesso!',
                data: searchPessoa
            }
        }
    }

    /**
       * Edita pessoa.
       * @param parm - Parametro da consulta
       * @returns retorno da consulta
  */

    async editPessoa(pessoaId: number, pessoa: PessoaAddInterface): Promise<PessoaResultInterface> {

        try {
            const editPessoa = await this.repoPessoa.edit({ 'pessoa_id': pessoaId }, pessoa)
            return {
                success: true,
                message: 'Registro alterado com sucesso!',
                data: editPessoa
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
                message: 'Erro ao Editar registro!',
                error: error as any
            }
        }
    }

   /**
   * Deleta pessoa.
   * @param parm - Parametro da consulta
   * @returns retorno da consulta
   */
    async deletePessoa(pessoaId: number) {
        try {
            const repositoryMethods: DeleteResult | Error = await this.repoPessoa.delete({ pessoa_id: pessoaId })
            
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
