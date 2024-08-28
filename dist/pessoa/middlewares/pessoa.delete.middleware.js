"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoaDeleteMiddleware = void 0;
const pessoaDeleteMiddleware = async (req, res, next) => {
    const pessoaId = req.params.id;
    console.log(pessoaId);
    const isNumeric = (param) => {
        return /^[0-9]+$/.test(param);
    };
    if (!pessoaId || !isNumeric(pessoaId)) {
        return res.status(400).json({
            success: false,
            message: 'invalid id!'
        });
    }
    next();
};
exports.pessoaDeleteMiddleware = pessoaDeleteMiddleware;
