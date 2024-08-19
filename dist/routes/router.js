"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const pessoa_add_middlewarer_1 = require("../pessoa/middlewares/pessoa.add.middlewarer");
const pessoa_add_controller_1 = require("../pessoa/controllers/pessoa.add.controller");
const pessoa_serach_middlewarer_1 = require("../pessoa/middlewares/pessoa.serach.middlewarer");
const pessoa_serach_controller_1 = require("../pessoa/controllers/pessoa.serach.controller");
exports.router = express_1.default.Router();
//teste rota publica
exports.router.get('/', (req, res) => {
    res.status(200).json({ "server": "Online" });
});
//CRUD PESSOA
exports.router.post('/pessoas/add', pessoa_add_middlewarer_1.pessoaAddMiddleware, pessoa_add_controller_1.pessoaAddController);
exports.router.get('/pessoas/search', pessoa_serach_middlewarer_1.pessoaSearchMiddleware, pessoa_serach_controller_1.pessoaSearchController); //
//router.put('/pessoas/edit/:id',editPessoaMiddleware, editPessoaController)
//router.delete('/pessoas/delete/:id',deletePessoaMiddleware, deletePessoaController)
