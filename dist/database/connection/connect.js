"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConnection = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//somente verifica se foi espefificada alguma porta fora do padrão
const db_port = () => {
    if (process.env.DB_PORT) {
        return parseInt(process.env.DB_PORT);
    }
    else {
        return 3306;
    }
};
//somente verifica se o logger do typeorm foi habilitado
const logging = () => {
    if (process.env.DB_LOGGING || process.env.DB_LOGGING === "true") {
        return true;
    }
    else {
        return false;
    }
};
exports.databaseConnection = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: db_port() || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: logging() || false,
    entities: [__dirname + "/../entity/*.{ts,js}"], //SEMPRE VERIFICAR O CAMINHO CORRETAMENTE
    migrations: [__dirname + "/../migrations/*.{ts,js}"], //SEMPRE VERIFICAR O CAMINHO CORRETAMENTE
    subscribers: []
});
