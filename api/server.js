const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Routers
const authRouter = require("../auth/auth-router.js");
const authenticator = require("../auth/authenticator.js");

//Server = express framework
const server = express();




//Server use ...
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/users", authenticator, authRouter)
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;