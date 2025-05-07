const Skill = require("../models/skills.model");

const obtenerSkills = async (req, res) => {
    try {
        const skills = await Skill.find().sort({ createdAt: -1 });
        res.status(200).json(skills);
    } catch (error) {
        console.error("Error al obtener habilidades:", error.message);
        res.status(500).json({
            mensaje: "Error del servidor al obtener habilidades",
        });
    }
};

const crearSkill = async (req, res) => {
    const { name } = req.body;

    if (!name || name.trim() === "") {
        return res
            .status(400)
            .json({ mensaje: "El nombre de la habilidad es obligatorio" });
    }

    try {
        const nuevaSkill = new Skill({ name: name.trim() });
        await nuevaSkill.save();
        res.status(201).json(nuevaSkill);
    } catch (error) {
        console.error("Error al crear habilidad:", error.message);
        res.status(500).json({
            mensaje: "Error del servidor al crear habilidad",
        });
    }
};

module.exports = { obtenerSkills, crearSkill };
