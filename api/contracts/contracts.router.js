const express = require("express");

const {
  createContract,
  getAllContracts,
  updateContracts,
  deleteContract,
} = require("./contracts.controler");
const { isAuth } = require("../middleware/auth.middleware");
const contractRouter = express.Router();

contractRouter.post("/", createContract);
contractRouter.get("/", getAllContracts);
contractRouter.patch("/", updateContracts);
contractRouter.delete("/", deleteContract);

module.exports = { contractRouter };
