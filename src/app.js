require("dotenv").config();
const express = require("express");
const cors = require("cors");


const qrRoutes = require("./routes/qrRoutes");

const app = express();

// Configurar EJS como motor de vistas
app.set("view engine", "ejs");
app.set("views", "./src/view");

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use("/", qrRoutes);

module.exports = app;
