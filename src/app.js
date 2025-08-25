require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// 🔹 Configuración CORS
const allowedOrigins = [
    "http://localhost:4200", // Frontend en local
    "https://portfoliojaviersancho.netlify.app" // Frontend en producción
];

app.use(cors({
    origin: function (origin, callback) {
        // Permitir peticiones sin origen (ej: Postman) o de la lista
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("No permitido por CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// Middleware JSON
app.use(express.json());

// Conexión a la base de datos
const conectarDB = require("./config/db.config");

// Rutas
app.use("/api", require("./routes/api.routes"));

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

module.exports = app;
