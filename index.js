const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { clientRouter } = require("./api/clientes/clientes.router");
const { connectMongo } = require("./util/db");
const { notFoundHandler, errorHandler,
} = require("./api/middleware/error.midleware");
const { contractRouter } = require("./api/contracts/contracts.router");
const { serviceRouter } = require("./api/services/services.router");
const { fileRouter } = require("./api/file/file.router");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectMongo();
app.get("/", (req, res) => {
  res.send("Hola si estoy");
});
app.use("/client", clientRouter);
app.use("/contract", contractRouter);
app.use("/service", serviceRouter);
app.use("/file", fileRouter);
app.listen(PORT, () => {
  console.log("Servidor iniciado en puerto: " + PORT);
});
