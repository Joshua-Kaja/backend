const router = require("express").Router();

// router.use("/api/v1/forms", require("./Forms/forms.controller"));
router.use("/api/v1/forms", require("./Users/auth"));

module.exports = router;
