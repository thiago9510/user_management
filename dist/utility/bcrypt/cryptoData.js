"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoData = void 0;
const bcrypt_1 = require("bcrypt");
/**
 * Classe responsável gerar e e retornar criptografia.
 */
class CryptoData {
    async create(data) {
        const SALT_RANDOMS = 8;
        const saltGenerated = await (0, bcrypt_1.genSalt)(SALT_RANDOMS);
        return await (0, bcrypt_1.hash)(data, saltGenerated);
    }
    async verify(normalData, hashData) {
        return await (0, bcrypt_1.compare)(normalData, hashData);
    }
}
exports.CryptoData = CryptoData;
