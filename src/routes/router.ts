import express from 'express'
import { Request, Response } from 'express'
import { pessoaAddMiddlewar } from '../pessoa/middlewares/pessoa.add.middleware'
import { pessoaAddController } from '../pessoa/controllers/pessoa.add.controller'
import { pessoaSearchMiddleware } from '../pessoa/middlewares/pessoa.serach.middleware'
import { pessoaSearchController } from '../pessoa/controllers/pessoa.serach.controller'
import { pessoaEditMiddleware } from '../pessoa/middlewares/pessoa.edit.middleware'
import { pessoaEditController } from '../pessoa/controllers/pessoa.edit.controller'
import { pessoaDeleteMiddleware } from '../pessoa/middlewares/pessoa.delete.middleware'
import { pessoaDeleteController } from '../pessoa/controllers/pessoa.delete.controller'

export const router = express.Router()

//teste rota publica
router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ "server": "Online" })
})

//CRUD PESSOA
router.post('/pessoas/add', pessoaAddMiddlewar, pessoaAddController) 
router.get('/pessoas/search', pessoaSearchMiddleware, pessoaSearchController) //
router.put('/pessoas/edit/:id',pessoaEditMiddleware, pessoaEditController)
router.delete('/pessoas/delete/:id',pessoaDeleteMiddleware, pessoaDeleteController)