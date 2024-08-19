import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './routes/router'
import { checkConnectionDb } from './database/connection/connectCheck'

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(router)

if(process.env.SERVER_PORT){
    const serverPort = parseInt(process.env.SERVER_PORT)
    app.listen(serverPort, '0.0.0.0', async ()=> {
        console.log(`server running on port: ${serverPort}`)
        await checkConnectionDb()
    })
}else{
    console.error (`server port not defined`)
}