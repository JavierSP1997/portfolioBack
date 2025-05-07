const router = require("express").Router();

router.use("/projects", require("./api/projects.routes"));
router.use("/skills", require("./api/skills.routes"));

module.exports = router;
