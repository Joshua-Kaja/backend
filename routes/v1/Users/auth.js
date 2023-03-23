const router = require("express").Router();
const cors = require("cors");

// const bcrypt = require("bcryptjs/dist/bcrypt"); //encrypting the password
var mongoose = require("mongoose");

const Forms = require("../../../private/Schemas/Form");
const sendMail = require("../../../private/services/send_email");

//REGISTRATION
router.post(
  "/register",
  cors({
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  }),
  async (req, res) => {
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

      return res.json({ status: 200, message: "User created successfully" });
    } catch (err) {
      return res.json({ status: 400, message: err });
    }
  }
);

module.exports = router;
