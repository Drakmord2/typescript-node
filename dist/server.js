"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const util_1 = __importDefault(require("./util"));
const server = express_1.default();
server.get("/", (_, res) => {
    const message = util_1.default.greet();
    res.send(message);
});
exports.default = server;
