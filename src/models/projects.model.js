const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    url: String,
});

module.exports = mongoose.model("Project", ProjectSchema);
