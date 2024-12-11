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
import { authenticateLoginMiddleware } from '../login/middlewares/login.middleware'
import { authenticateLoginController } from '../login/controllers/login.controller'
import { autorizationMiddleware } from '../authorization/middlewares/authorization.Middleware'


export const router = express.Router()

//teste rota publica
router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ "server": "Online" })
})

//CRUD LOGIN
router.post('/usuarios/login', authenticateLoginMiddleware, authenticateLoginController)


//CRUD PESSOA
router.post('/pessoas/add', authenticateMiddleware, autorizationMiddleware, pessoaAddMiddlewar, pessoaAddController) 
router.get('/pessoas/search', authenticateMiddleware, autorizationMiddleware, pessoaSearchMiddleware, pessoaSearchController)
router.put('/pessoas/edit/:id', authenticateMiddleware, autorizationMiddleware, pessoaEditMiddleware, pessoaEditController)
router.delete('/pessoas/delete/:id', authenticateMiddleware, autorizationMiddleware, pessoaDeleteMiddleware, pessoaDeleteController)

// CRUD USUARIO
router.post('/usuarios/add', authenticateMiddleware, autorizationMiddleware, usuarioAddMiddleware, usuarioAddControlle) 
router.get('/usuarios/search', authenticateMiddleware, autorizationMiddleware, usuarioSearchMiddleware, usuarioSearchController) 
router.put('/usuarios/edit/:id', authenticateMiddleware, autorizationMiddleware, usuarioEditMiddleware, usuarioEditController)
router.delete('/usuarios/delete/:id', authenticateMiddleware, autorizationMiddleware, usuarioDeleteMiddleware, usuarioDeleteController)

//CRUD GRUPO DE USUARIO
router.post('/grupoUsuarios/add', authenticateMiddleware, autorizationMiddleware, grupoUsuariosAddMiddleware, grupoUsuariosAddControlle) 
router.get('/grupoUsuarios/search', authenticateMiddleware, autorizationMiddleware, grupoUsuariosSearchMiddleware, grupoUsuariosSearchController) 
router.put('/grupoUsuarios/edit/:id', authenticateMiddleware, autorizationMiddleware, grupoUsuariosEditMiddleware, grupoUsuariosEditController)
router.delete('/grupoUsuarios/delete/:id', authenticateMiddleware, autorizationMiddleware, grupoUsuariosDeleteMiddleware, grupoUsuariosController)

//CRUD RELAÇÃO DE USUARIO/GRUPOS
router.post('/relUserGrup/add', authenticateMiddleware, autorizationMiddleware, relUserGrupAddMiddleware, relUserGrupAddController) 
router.get('/relUserGrup/search', authenticateMiddleware, autorizationMiddleware, relUserGrupSearchMiddleware, relUserGrupSearchController) 
router.put('/relUserGrup/edit/:id', authenticateMiddleware, autorizationMiddleware, relUserGrupEditMiddleware, relUserGrupEditController)
router.delete('/relUserGrup/delete/:id', authenticateMiddleware, autorizationMiddleware, relUserGrupDeleteMiddleware, relUsergrupController)

//CRUDE AÇÕES
router.post('/acoes/add', authenticateMiddleware, autorizationMiddleware, acoesAddMiddleware, acoesAddController)
router.get('/acoes/search', authenticateMiddleware, autorizationMiddleware, acoesSearchMiddleware, acoesSearchController)
router.put('/acoes/edit/:id', authenticateMiddleware, autorizationMiddleware, acoesEditMiddleware, acoesEditController)
router.delete('/acoes/delete/:id', authenticateMiddleware, autorizationMiddleware, AcoesDeleteMiddleware, acoesDeleteController)

//CRUDE RELAÇÃO GRUPO/AÇÕES
router.post('/relGrupoAcao/add', authenticateMiddleware, autorizationMiddleware, relGrupoAcaoAddMiddleware, relGrupoAcaoAddController)
router.get('/relGrupoAcao/search', authenticateMiddleware, autorizationMiddleware, relGrupoAcaoSearchMiddleware, relGrupoAcaoSearchController)
router.put('/relGrupoAcao/edit/:id', authenticateMiddleware, autorizationMiddleware, relGrupoAcaoEditMiddleware, relGrupoAcaoController)
router.delete('/relGrupoAcao/delete/:id', authenticateMiddleware, autorizationMiddleware, relGrupoAcaoDeleteMiddleware, relGrupoAcaoDeleteController)
