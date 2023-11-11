const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "meghan.effertz@ethereal.email",
      pass: "W3QhuX5YpEnK5qDGGN",
    },
  });

  let info = await transporter.sendMail({
    from: "'Gojo <gojo@gmail.com>'",
    to: "test@example.com",
    subject: "Hello",
    html: "<h2>Sending Emails with Node.js",
  });

  res.json(info);
};

module.exports = sendEmail;
