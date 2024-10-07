import express from 'express'
import { Request, Response } from 'express'
import { pessoaAddController, pessoaDeleteController, pessoaEditController, pessoaSearchController } from '../pessoa/controllers/pessoa.controller'
import { pessoaAddMiddlewar, pessoaDeleteMiddleware, pessoaEditMiddleware, pessoaSearchMiddleware } from '../pessoa/middlewares/pessoa.middleware'
import { usuarioAddMiddleware, usuarioDeleteMiddleware, usuarioEditMiddleware, usuarioSearchMiddleware } from '../usuario/middlewares/usuario.middleware'
import { usuarioAddControlle, usuarioDeleteController, usuarioEditController, usuarioSearchController } from '../usuario/controllers/usuario.controller'


export const router = express.Router()

//teste rota publica
router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ "server": "Online" })
})

//CRUD PESSOA
router.post('/pessoas/add', pessoaAddMiddlewar, pessoaAddController) 
router.get('/pessoas/search', pessoaSearchMiddleware, pessoaSearchController)
router.put('/pessoas/edit/:id',pessoaEditMiddleware, pessoaEditController)
router.delete('/pessoas/delete/:id',pessoaDeleteMiddleware, pessoaDeleteController)

//CRUD
// CRUD USUARIO
router.post('/usuarios/add',usuarioAddMiddleware, usuarioAddControlle) 
router.get('/usuarios/search',usuarioSearchMiddleware, usuarioSearchController) 
router.put('/usuarios/edit/:id',usuarioEditMiddleware, usuarioEditController)
router.delete('/usuarios/delete/:id',usuarioDeleteMiddleware, usuarioDeleteController)