const nodemailer = require("nodemailer");

const sendMail = (email, mail_body) =>
  new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "inservizinc@gmail.com",
        pass: "00233account",
      },
      secure: true,
      tls: {
        servername: "gmail.com",
      },
    });

    let mailOptions = {
      from: "replyus.app@gmail.com",
      to: `${email}`,
      subject: "Inserviz",
      html: mail_body,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      }
      resolve("ok");
    });
  });

module.exports = sendMail;
