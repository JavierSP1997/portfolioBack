const Project = require("../models/projects.model");

const obtenerProyectos = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        console.error("Error al obtener proyectos:", error);
        res.status(500).json({ mensaje: "Error al obtener proyectos" });
    }
};

const crearProyecto = async (req, res) => {
    const { title, description, url } = req.body;

    try {
        const nuevoProyecto = new Project({
            title,
            description,
            url,
        });

        await nuevoProyecto.save();

        res.status(201).json(nuevoProyecto);
    } catch (error) {
        console.error("Error al crear proyecto:", error);
        res.status(400).json({ mensaje: "Error al crear proyecto" });
    }
};

module.exports = {
    obtenerProyectos,
    crearProyecto,
};
