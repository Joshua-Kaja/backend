const Forms = require("../Schemas/Form");
const Joi = require("joi");
const nodemailer = require("nodemailer");
const Form = require("../Schemas/Form");

async function getRegisteredUser({ req }) {
  const { email } = req.body;
  try {
    const exist = await Form.find({ email });
    if (exist) ({ status: "failed", message: "User already exist" });
    const results = await Forms.create({ ...req.body });
    return { message: "success" };
  } catch (error) {
    return { message: error };
  }
}

module.exports = { getRegisteredUser };
