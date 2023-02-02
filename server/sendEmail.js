const nodemailer = require("nodemailer");

const Email = (options) => {
  let transporter = nodemailer.createTransport({
    // service: "gmail",
    // host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "Gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  transporter.sendMail(options, (error, info) => {
    if (error) {
      console.log(error);
      return;
    }
  });
};

// Now send email
const EmailSender = ({ fullName, email, message }) => {
  const options = {
    from: `<${process.env.USER}>`,
    to: process.env.RECIPIENT,
    subject: "New email message",
    html: `<div>
            <p>Full name: ${fullName}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
        </div>`,
  };

  Email(options);
};

module.exports = EmailSender;
