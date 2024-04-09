const express = require("express");


const {createService} = require("./services.controler");
// const {isAuth} = require("../middleware/auth.middleware")
const serviceRouter = express.Router();



serviceRouter.post("/service", createService);
module.exports = {serviceRouter}