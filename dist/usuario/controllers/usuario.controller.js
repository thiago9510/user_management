"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioAddControlle = void 0;
const usuario_service_1 = require("../services/usuario.service");
//Create
const usuarioAddControlle = async (req, res) => {
    const usuario = req.body;
    const service = new usuario_service_1.UsuarioService();
    const response = await service.addUsuario(usuario);
    if (response.success == false) {
        res.status(400).json(response);
    }
    else {
        res.status(200).json(response);
    }
};
exports.usuarioAddControlle = usuarioAddControlle;
