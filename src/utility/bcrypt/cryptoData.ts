import { compare, genSalt, hash } from "bcrypt"
import dotenv from 'dotenv'
dotenv.config()

/**
 * Classe responsável gerar e e retornar criptografia. 
 */
export class CryptoData {    
    async create(data: string){
        const SALT_RANDOMS = process.env.BCRYPT_SALT_RANDOMS
        if(!SALT_RANDOMS){
            return 'Erro ao Criptografar senhar'
        }
        const saltGenerated = await genSalt(parseInt(SALT_RANDOMS))
        return await hash(data, saltGenerated)
        
    }
    async verify(normalData: string, hashData: string){
        return await compare(normalData, hashData)
    }
}