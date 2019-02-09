import express from "express";

const server = express();

server.get("/", (_, res) => {
    res.send("Node + TypeScript");
});

export default server;
