"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = require("./routes/router");
const connectCheck_1 = require("./database/connection/connectCheck");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(router_1.router);
if (process.env.SERVER_PORT) {
    const serverPort = parseInt(process.env.SERVER_PORT);
    app.listen(serverPort, '0.0.0.0', async () => {
        console.log(`server running on port: ${serverPort}`);
        await (0, connectCheck_1.checkConnectionDb)();
    });
}
else {
    console.error(`server port not defined`);
}
