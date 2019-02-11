"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const util_1 = __importDefault(require("./util"));
const user_1 = __importDefault(require("./model/user"));
const server = express_1.default();
server.get("/", (_, res) => {
    const date = new Date();
    const message = util_1.default.greet(date);
    res.send(message);
});
server.get("/user", (_, res) => {
    let u = new user_1.default();
    u.setId(1);
    let message = "User: " + u.getId() + "<br>Hash: " + u.hash;
    res.send(message);
});
exports.default = server;
