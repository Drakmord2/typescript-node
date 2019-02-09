import express from "express";
import util from "./util";

const server = express();

server.get("/", (_, res) => {
    const message = util.greet();

    res.send(message);
});

export default server;
