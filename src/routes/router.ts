import express from 'express'
import { Request, Response } from 'express'
import { pessoaAddController, pessoaDeleteController, pessoaEditController, pessoaSearchController } from '../pessoa/controllers/pessoa.controller'
import { pessoaAddMiddlewar, pessoaDeleteMiddleware, pessoaEditMiddleware, pessoaSearchMiddleware } from '../pessoa/middlewares/pessoa.middleware'


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