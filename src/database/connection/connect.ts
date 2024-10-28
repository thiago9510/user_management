import 'reflect-metadata'
import { DataSource } from "typeorm"
import dotenv from 'dotenv'
import { PlatformTools } from 'typeorm/platform/PlatformTools'
dotenv.config()

//somente verifica se foi espefificada alguma porta fora do padrão
const db_port = () => {
    if (process.env.DB_PORT) {
        return parseInt(process.env.DB_PORT)
    } else {
        return 3306
    }
}

//somente verifica se o logger do typeorm foi habilitado
const logging = () => {
    if (process.env.DB_LOGGING || process.env.DB_LOGGING === "true") {
        return true
    } else {
        return false
    }
}

export const databaseConnection = new DataSource({
    type: "mysql",
    connectorPackage: 'mysql2',
    driver: PlatformTools.load('mysql2'),
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
})
