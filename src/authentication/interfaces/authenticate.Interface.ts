import jwt from 'jsonwebtoken'; // Importe a biblioteca

export interface JwtPayload extends jwt.JwtPayload {
    permissions: string[]; // Permissões no payload
    sub: string;           // Exemplo de outra propriedade
}

declare module "express" {
    export interface Request {
        user?: { usuario_id: string }; // Adicione aqui o que será armazenado em `req.user`
    }
}