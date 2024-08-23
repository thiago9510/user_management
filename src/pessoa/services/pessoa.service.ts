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
                message: 'Registro adicionado com sucesso!',
                data: createPessoa
            }
        } catch (error) {
            return {
                success: false,
                message: 'Erro ao adicionar registro!',
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

     /**
        * Busca uma pessoa.
        * @param parm - Parametro da consulta
        * @returns retorno da consulta
   */

     async editPessoa(queryParameter: { [key: string]: string }): Promise<PessoaResultInterface> { //criar interface retorno
        const editPessoa = await this.repoPessoa.search(pe)
        const cpf = pessoa.pessoa_cpf
        const email = pessoa.pessoa_email
        try {
            const buscaCPF = await repositoryMethods.search({ 'pessoa_cpf': cpf })

            if (buscaCPF instanceof Error) {
                throw buscaCPF
            }

            if (buscaCPF.length > 0) {
                return `CPF já Cadastrado!`
            }
            const bsucaEmail = await repositoryMethods.search({ 'pessoa_email': email })

            if (bsucaEmail instanceof Error) {
                throw bsucaEmail
            } else if (bsucaEmail.length > 0) {
                return `Email Já cadastrado!!`
            }
            else {
                const result = await repositoryMethods.add(pessoa)
                return result
            }
        } catch (error) {
            throw error
        }
    }

}