"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const pessoa_controller_1 = require("../pessoa/controllers/pessoa.controller");
const pessoa_middleware_1 = require("../pessoa/middlewares/pessoa.middleware");
const usuario_middleware_1 = require("../usuario/middlewares/usuario.middleware");
const usuario_controller_1 = require("../usuario/controllers/usuario.controller");
exports.router = express_1.default.Router();
//teste rota publica
exports.router.get('/', (req, res) => {
    res.status(200).json({ "server": "Online" });
});
//CRUD PESSOA
exports.router.post('/pessoas/add', pessoa_middleware_1.pessoaAddMiddlewar, pessoa_controller_1.pessoaAddController);
exports.router.get('/pessoas/search', pessoa_middleware_1.pessoaSearchMiddleware, pessoa_controller_1.pessoaSearchController);
exports.router.put('/pessoas/edit/:id', pessoa_middleware_1.pessoaEditMiddleware, pessoa_controller_1.pessoaEditController);
exports.router.delete('/pessoas/delete/:id', pessoa_middleware_1.pessoaDeleteMiddleware, pessoa_controller_1.pessoaDeleteController);
//CRUD
// CRUD USUARIO
exports.router.post('/usuarios/add', usuario_middleware_1.usuarioAddMiddleware, usuario_controller_1.usuarioAddControlle);
//router.get('/usuarios/search',usuarioSearchMiddleware, usuarioSearchController)
//router.put('/usuarios/edit/:id',usuarioEditMiddleware, usuarioEditController)
//router.delete('/usuarios/delete/:id',usuarioDeleteMiddleware, usuarioDeleteController)
