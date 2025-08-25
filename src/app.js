require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

// Configuración CORS para permitir solo tu frontend
const allowedOrigins = ["https://portfoliojaviersancho.netlify.app"];
app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// Conexión a la base de datos
const conectarDB = require("./config/db.config");

// Ruta de la API
app.use("/api", require("./routes/api.routes"));

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({
        message: "Not found",
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

module.exports = app;
