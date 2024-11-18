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
import { authenticateMiddleware } from '../authentication/middlewares/authenticate.Middleware'


export const router = express.Router()

//teste rota publica
router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ "server": "Online" })
})

//CRUD PESSOA
router.post('/pessoas/add', authenticateMiddleware, pessoaAddMiddlewar, pessoaAddController) 
router.get('/pessoas/search', authenticateMiddleware, pessoaSearchMiddleware, pessoaSearchController)
router.put('/pessoas/edit/:id', authenticateMiddleware, pessoaEditMiddleware, pessoaEditController)
router.delete('/pessoas/delete/:id', authenticateMiddleware, pessoaDeleteMiddleware, pessoaDeleteController)

// CRUD USUARIO
router.post('/usuarios/add', authenticateMiddleware, usuarioAddMiddleware, usuarioAddControlle) 
router.get('/usuarios/search', authenticateMiddleware, usuarioSearchMiddleware, usuarioSearchController) 
router.put('/usuarios/edit/:id', authenticateMiddleware, usuarioEditMiddleware, usuarioEditController)
router.delete('/usuarios/delete/:id', authenticateMiddleware, usuarioDeleteMiddleware, usuarioDeleteController)

//CRUD GRUPO DE USUARIO
router.post('/grupoUsuarios/add', authenticateMiddleware, grupoUsuariosAddMiddleware, grupoUsuariosAddControlle) 
router.get('/grupoUsuarios/search', authenticateMiddleware, grupoUsuariosSearchMiddleware, grupoUsuariosSearchController) 
router.put('/grupoUsuarios/edit/:id', authenticateMiddleware, grupoUsuariosEditMiddleware, grupoUsuariosEditController)
router.delete('/grupoUsuarios/delete/:id', authenticateMiddleware, grupoUsuariosDeleteMiddleware, grupoUsuariosController)

//CRUD RELAÇÃO DE USUARIO/GRUPOS
router.post('/relUserGrup/add', authenticateMiddleware, relUserGrupAddMiddleware, relUserGrupAddController) 
router.get('/relUserGrup/search', authenticateMiddleware, relUserGrupSearchMiddleware, relUserGrupSearchController) 
router.put('/relUserGrup/edit/:id', authenticateMiddleware, relUserGrupEditMiddleware, relUserGrupEditController)
router.delete('/relUserGrup/delete/:id', authenticateMiddleware, relUserGrupDeleteMiddleware, relUsergrupController)

//CRUDE AÇÕES
router.post('/acoes/add', authenticateMiddleware, acoesAddMiddleware, acoesAddController)
router.get('/acoes/search', authenticateMiddleware, acoesSearchMiddleware, acoesSearchController)
router.put('/acoes/edit/:id', authenticateMiddleware, acoesEditMiddleware, acoesEditController)
router.delete('/acoes/delete/:id', authenticateMiddleware, AcoesDeleteMiddleware, acoesDeleteController)

//CRUDE RELAÇÃO GRUPO/AÇÕES
router.post('/relGrupoAcao/add', authenticateMiddleware, relGrupoAcaoAddMiddleware, relGrupoAcaoAddController)
router.get('/relGrupoAcao/search', authenticateMiddleware, relGrupoAcaoSearchMiddleware, relGrupoAcaoSearchController)
router.put('/relGrupoAcao/edit/:id', authenticateMiddleware, relGrupoAcaoEditMiddleware, relGrupoAcaoController)
router.delete('/relGrupoAcao/delete/:id', authenticateMiddleware, relGrupoAcaoDeleteMiddleware, relGrupoAcaoDeleteController)
