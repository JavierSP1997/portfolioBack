const Project = require("../models/projects.model");

const obtenerProyectos = async (req, res, next) => {
    try {
        const projects = await Project.find().populate(
            "title",
            "description",
            "url",
        );
        res.json(projects);
    } catch (error) {
        next(error);
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
        proyecto;
    } catch (error) {
        console.error("Error al crear proyecto:", error);
        res.status(400).json({ mensaje: "Error al crear proyecto" });
    }
};

module.exports = {
    obtenerProyectos,
    crearProyecto,
};
