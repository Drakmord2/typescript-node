import express from "express";
import util from "./util";
import User from "./model/user";

const server = express();

server.get("/", (_, res) => {
    const date      = new Date();
    const message   = util.greet(date);

    res.send(message);
});

server.get("/user", (_, res) => {
    let u = new User();
    u.setId(1);

    let message = "User: "+u.getId()+"<br>Hash: "+u.hash;

    res.send(message);
});

export default server;
