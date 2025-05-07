const express = require("express");
const router = express.Router();

// Rutas para proyectos
const proyectosController = require("../controllers/projects.controller");
router.get("/proyectos", proyectosController.obtenerProyectos);
router.post("/proyectos", proyectosController.crearProyecto);

// Rutas para habilidades
const skillsController = require("../controllers/skills.controller");
router.get("/skills", skillsController.obtenerSkills);
router.post("/skills", skillsController.crearSkill);

module.exports = router;
