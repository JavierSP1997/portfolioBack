const express = require("express");
const router = express.Router();
const {
    obtenerProyectos,
    crearProyecto,
} = require("../../controllers/projects.controller");

router.get("/", obtenerProyectos);
router.post("/", crearProyecto);

module.exports = router;
