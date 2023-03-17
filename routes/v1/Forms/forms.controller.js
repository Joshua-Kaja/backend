const {
  getRegisteredUser,
} = require("../../../private/services/forms.service");

const router = require("express").Router();

router.post("/get-registered-form", async (req, res, next) => {
  try {
    return res.status(200).json(await getRegisteredUser({ req }));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
