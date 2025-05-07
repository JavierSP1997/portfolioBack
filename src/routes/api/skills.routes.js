const express = require("express");
const router = express.Router();
const {
    obtenerSkills,
    crearSkill,
} = require("../../controllers/skills.controller");

router.get("/", obtenerSkills);
router.post("/", crearSkill);

module.exports = router;
