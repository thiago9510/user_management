"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const pessoa_add_middleware_1 = require("../pessoa/middlewares/pessoa.add.middleware");
const pessoa_add_controller_1 = require("../pessoa/controllers/pessoa.add.controller");
const pessoa_serach_middleware_1 = require("../pessoa/middlewares/pessoa.serach.middleware");
const pessoa_serach_controller_1 = require("../pessoa/controllers/pessoa.serach.controller");
const pessoa_edit_middleware_1 = require("../pessoa/middlewares/pessoa.edit.middleware");
const pessoa_edit_controller_1 = require("../pessoa/controllers/pessoa.edit.controller");
const pessoa_delete_middleware_1 = require("../pessoa/middlewares/pessoa.delete.middleware");
const pessoa_delete_controller_1 = require("../pessoa/controllers/pessoa.delete.controller");
exports.router = express_1.default.Router();
//teste rota publica
exports.router.get('/', (req, res) => {
    res.status(200).json({ "server": "Online" });
});
//CRUD PESSOA
exports.router.post('/pessoas/add', pessoa_add_middleware_1.pessoaAddMiddlewar, pessoa_add_controller_1.pessoaAddController);
exports.router.get('/pessoas/search', pessoa_serach_middleware_1.pessoaSearchMiddleware, pessoa_serach_controller_1.pessoaSearchController); //
exports.router.put('/pessoas/edit/:id', pessoa_edit_middleware_1.pessoaEditMiddleware, pessoa_edit_controller_1.pessoaEditController);
exports.router.delete('/pessoas/delete/:id', pessoa_delete_middleware_1.pessoaDeleteMiddleware, pessoa_delete_controller_1.pessoaDeleteController);
