const router = require("express").Router();
const cors = require("cors");

// router.use("/api/v1/forms", require("./Forms/forms.controller"));
router.use("/api/v1/forms", cors(), require("./Users/auth"));

module.exports = router;
