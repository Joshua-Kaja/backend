const router = require("express").Router();

// const bcrypt = require("bcryptjs/dist/bcrypt"); //encrypting the password
var mongoose = require("mongoose");

const Forms = require("../../../private/Schemas/Form");
const sendMail = require("../../../private/services/send_email");

//REGISTRATION
router.post("/register", async (req, res) => {
  const { email } = req.body;
  const { phone } = req.body;
  const { name } = req.body;
  const { skills } = req.body;

  //check if user exists
  const emailExists = await Forms.findOne({ email: email });
  if (emailExists) {
    return res.json({ status: 400, message: "User already exists" });
  }
  try {
    const saveUser = await Forms.create({ email, name, phone, skills });
    if (saveUser) {
      const email_body = BaseTemplate(
        "Welcome to Inserviz",
        "Your account has been created successfully",
        `Login and get access to great healthcare services.`,
        "not-me-password-reset"
      );

      await sendMail(email, email_body);

      return res.json({ status: 200, message: "User created successfully" });
    }
  } catch (err) {
    return res.json({ status: 400, message: err });
  }
});

module.exports = router;
