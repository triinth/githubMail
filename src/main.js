require('dotenv').config()
const nodemailer = require("nodemailer");

(async function run() {
    console.log('Sending an email')
  
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 
      auth: {
        user: process.env.MAIL_USERNAME, // generated ethereal user
        pass: process.env.MAIL_PASSWORD, // generated ethereal password
      },
    });

     await transporter.sendMail({
        from: process.env.MAIL_USERNAME, // sender address
        to: "tr11ntahk@hotmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

    });
