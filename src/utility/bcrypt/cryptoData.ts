import { compare, genSalt, hash } from "bcrypt"
/**
 * Classe responsável gerar e e retornar criptografia. 
 */
export class CryptoData {    
    async create(data: string){
        const SALT_RANDOMS = 8
        const saltGenerated = await genSalt(SALT_RANDOMS)
        return await hash(data, saltGenerated)
        
    }
    async verify(normalData: string, hashData: string){
        return await compare(normalData, hashData)
    }
}

