import express from 'express'
import { Request, Response } from 'express'
import { pessoaAddMiddleware } from '../pessoa/middlewares/pessoa.add.middlewarer'
import { pessoaAddController } from '../pessoa/controllers/pessoa.add.controller'
import { pessoaSearchMiddleware } from '../pessoa/middlewares/pessoa.serach.middlewarer'
import { pessoaSearchController } from '../pessoa/controllers/pessoa.serach.controller'

export const router = express.Router()

//teste rota publica
router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ "server": "Online" })
})

//CRUD PESSOA
router.post('/pessoas/add', pessoaAddMiddleware, pessoaAddController) 
router.get('/pessoas/search', pessoaSearchMiddleware, pessoaSearchController) //
//router.put('/pessoas/edit/:id',editPessoaMiddleware, editPessoaController)
//router.delete('/pessoas/delete/:id',deletePessoaMiddleware, deletePessoaController)