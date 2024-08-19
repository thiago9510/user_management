import { PessoaEntity } from "../../database/entity/pessoasEntity";
import { PessoaAddInterface} from "../interfaces/pessoa.add.interface";
import { PessoaRepository } from "../repositories/pessoa.repositories";
import { PessoaResultInterface, QueryFailedPessoaError } from "../interfaces/pessoa.interface";


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

    async addPessoa(pessoa: PessoaAddInterface): Promise<PessoaResultInterface>{      
     
        try {
            const createPessoa = await this.repoPessoa.create(pessoa)            
            return {
                success: true,
                message: 'Consulta realizada com sucesso!',
                data: createPessoa
            }
        } catch (error) {
            return {
                success: false,
                message: 'Erro ao Consultar Pessoa',
                error: error as any
            }
        }
    }

    /**
        * Busca uma pessoa.
        * @param parm - Parametro da consulta
        * @returns retorno da consulta
   */

    async searchPessoa(queryParameter: { [key: string]: string }): Promise<PessoaResultInterface> { //criar interface retorno
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

}