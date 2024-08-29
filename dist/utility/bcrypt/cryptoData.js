"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoData = void 0;
const bcrypt_1 = require("bcrypt");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
/**
 * Classe responsável gerar e e retornar criptografia.
 */
class CryptoData {
    async create(data) {
        const SALT_RANDOMS = process.env.BCRYPT_SALT_RANDOMS;
        if (!SALT_RANDOMS) {
            return 'Erro ao Criptografar senhar';
        }
        const saltGenerated = await (0, bcrypt_1.genSalt)(parseInt(SALT_RANDOMS));
        return await (0, bcrypt_1.hash)(data, saltGenerated);
    }
    async verify(normalData, hashData) {
        return await (0, bcrypt_1.compare)(normalData, hashData);
    }
}
exports.CryptoData = CryptoData;
