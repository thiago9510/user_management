import express from 'express'
import { Request, Response } from 'express'
import { pessoaAddController, pessoaDeleteController, pessoaEditController, pessoaSearchController } from '../pessoa/controllers/pessoa.controller'
import { pessoaAddMiddlewar, pessoaDeleteMiddleware, pessoaEditMiddleware, pessoaSearchMiddleware } from '../pessoa/middlewares/pessoa.middleware'
import { usuarioAddMiddleware, usuarioDeleteMiddleware, usuarioEditMiddleware, usuarioSearchMiddleware } from '../usuario/middlewares/usuario.middleware'
import { usuarioAddControlle, usuarioDeleteController, usuarioEditController, usuarioSearchController } from '../usuario/controllers/usuario.controller'
import { grupoUsuariosAddMiddleware, grupoUsuariosDeleteMiddleware, grupoUsuariosEditMiddleware, grupoUsuariosSearchMiddleware } from '../grupoUsuarios/middlewares/grupoUsuariosmiddleware'
import { grupoUsuariosAddControlle, grupoUsuariosController, grupoUsuariosEditController, grupoUsuariosSearchController } from '../grupoUsuarios/controllers/grupoUsuarios.controller'
import { relUserGrupAddMiddleware, relUserGrupDeleteMiddleware, relUserGrupEditMiddleware, relUserGrupSearchMiddleware } from '../relUsuarioGrupo/middlewares/relUsuarioGrupo.middleware'
import { relUserGrupAddController, relUsergrupController, relUserGrupEditController, relUserGrupSearchController } from '../relUsuarioGrupo/controllers/relUsuarioGrupo.controller'
import { acoesAddMiddleware, AcoesDeleteMiddleware, acoesEditMiddleware, acoesSearchMiddleware } from '../acoes/middlewares/acoes.middleware'
import { acoesAddController, acoesDeleteController, acoesEditController, acoesSearchController } from '../acoes/controllers/acoes.controller'
import { relGrupoAcaoAddMiddleware, relGrupoAcaoDeleteMiddleware, relGrupoAcaoEditMiddleware, relGrupoAcaoSearchMiddleware } from '../relGrupoAcao/middlewares/relGrupoAcao.middleware'
import { relGrupoAcaoAddController, relGrupoAcaoController, relGrupoAcaoDeleteController, relGrupoAcaoSearchController } from '../relGrupoAcao/controllers/relGrupoAcao.controller'


export const router = express.Router()

//teste rota publica
router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ "server": "Online" })
})

//CRUD PESSOA
router.post('/pessoas/add', pessoaAddMiddlewar, pessoaAddController) 
router.get('/pessoas/search', pessoaSearchMiddleware, pessoaSearchController)
router.put('/pessoas/edit/:id', pessoaEditMiddleware, pessoaEditController)
router.delete('/pessoas/delete/:id', pessoaDeleteMiddleware, pessoaDeleteController)

// CRUD USUARIO
router.post('/usuarios/add', usuarioAddMiddleware, usuarioAddControlle) 
router.get('/usuarios/search', usuarioSearchMiddleware, usuarioSearchController) 
router.put('/usuarios/edit/:id', usuarioEditMiddleware, usuarioEditController)
router.delete('/usuarios/delete/:id', usuarioDeleteMiddleware, usuarioDeleteController)

//CRUD GRUPO DE USUARIO
router.post('/grupoUsuarios/add', grupoUsuariosAddMiddleware, grupoUsuariosAddControlle) 
router.get('/grupoUsuarios/search', grupoUsuariosSearchMiddleware, grupoUsuariosSearchController) 
router.put('/grupoUsuarios/edit/:id', grupoUsuariosEditMiddleware, grupoUsuariosEditController)
router.delete('/grupoUsuarios/delete/:id', grupoUsuariosDeleteMiddleware, grupoUsuariosController)

//CRUD RELAÇÃO DE USUARIO/GRUPOS
router.post('/relUserGrup/add', relUserGrupAddMiddleware, relUserGrupAddController) 
router.get('/relUserGrup/search', relUserGrupSearchMiddleware, relUserGrupSearchController) 
router.put('/relUserGrup/edit/:id', relUserGrupEditMiddleware, relUserGrupEditController)
router.delete('/relUserGrup/delete/:id', relUserGrupDeleteMiddleware, relUsergrupController)

//CRUDE AÇÕES
router.post('/acoes/add', acoesAddMiddleware, acoesAddController)
router.get('/acoes/search', acoesSearchMiddleware, acoesSearchController)
router.put('/acoes/edit/:id', acoesEditMiddleware, acoesEditController)
router.delete('/acoes/delete/:id', AcoesDeleteMiddleware, acoesDeleteController)

//CRUDE RELAÇÃO GRUPO/AÇÕES
router.post('/relGrupoAcao/add', relGrupoAcaoAddMiddleware, relGrupoAcaoAddController)
router.get('/relGrupoAcao/search', relGrupoAcaoSearchMiddleware, relGrupoAcaoSearchController)
router.put('/relGrupoAcao/edit/:id', relGrupoAcaoEditMiddleware, relGrupoAcaoController)
router.delete('/relGrupoAcao/delete/:id', relGrupoAcaoDeleteMiddleware, relGrupoAcaoDeleteController)
