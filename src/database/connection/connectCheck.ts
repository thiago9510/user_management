import { databaseConnection } from "./connect"

//Verifica conexão
export async function checkConnectionDb() {
    try {
        await databaseConnection.initialize()
        //await database.synchronize()
        console.log('connected database')
    } catch (error) {
        console.log(error)
        return error
    }
}