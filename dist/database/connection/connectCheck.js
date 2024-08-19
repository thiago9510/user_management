"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkConnectionDb = checkConnectionDb;
const connect_1 = require("./connect");
//Verifica conexão
async function checkConnectionDb() {
    try {
        await connect_1.databaseConnection.initialize();
        //await database.synchronize()
        console.log('connected database');
    }
    catch (error) {
        console.log(error);
        return error;
    }
}
