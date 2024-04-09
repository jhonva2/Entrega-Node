const express = require("express");

const {
  createClient,
  getAllClients,
  updateClients,
} = require("./clientes.controler");
const { isAuth } = require("../middleware/auth.middleware");
const clientRouter = express.Router();

clientRouter.post("/", createClient);
clientRouter.get("/", getAllClients);
clientRouter.patch("/", updateClients);
module.exports = { clientRouter };
