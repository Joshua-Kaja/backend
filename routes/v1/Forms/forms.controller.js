const {
  getRegisteredUser,
} = require("../../../private/services/forms.service");

const router = require("express").Router();

const cors = require("cors");

router.post("/get-registered-form", async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    return res.status(200).json(await getRegisteredUser({ req }));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
