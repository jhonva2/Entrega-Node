const express = require("express");

const {
  createClient,
  getAllClients,
  updateClients,
  deleteClient,
} = require("./clientes.controler");
const { isAuth } = require("../middleware/auth.middleware");
const clientRouter = express.Router();

clientRouter.post("/", createClient);
clientRouter.get("/", getAllClients);
clientRouter.patch("/", updateClients);
clientRouter.delete("/", deleteClient);
module.exports = { clientRouter };
