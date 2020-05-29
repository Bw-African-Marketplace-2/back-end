const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// Routers
const authenticate = require("../auth/authenticator.js");
const authRouter = require("../auth/auth-router.js");
const productRouter = require("../products/products-router.js");
const priceRouter = require("../prices/prices-router");

//Server = express framework
const server = express();

//Server use ...
server.use(helmet());
server.use(cors());
server.use(express.json());

// Server
server.use("/api/auth", authRouter);
server.use("/api/products", authenticate, productRouter);
server.use("/api/prices", authenticate, priceRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
