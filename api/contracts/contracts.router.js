const express = require("express");


const {createContract} = require("./contracts.controler");
const {isAuth} = require("../middleware/auth.middleware")
const contractRouter = express.Router();



contractRouter.post("/", createContract);
module.exports = {contractRouter}