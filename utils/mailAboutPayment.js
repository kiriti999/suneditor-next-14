import nodemailer from 'nodemailer';
const dotenv = require('dotenv');

//Access environment variables
const envVars = process.env;

const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: envVars.email,
    pass: envVars.emailPassword,
  },
});

const mailAboutPayment = async (data) => {
  const { name, email, course } = data;
  const mailData = {
    to: email,
    from: "support@whatsnxt.in",
    subject: "Payment confirmation",
    html: `<h1>Course Purchase Confirmation</h1>
    <br/>
      <p>Dear ${name},</p>
      <p>Thank you for purchasing the course "<strong>${course.title}</strong>". We hope you enjoy it!</p>
      <p>If you have any questions or need assistance, please don't hesitate to contact us.</p>
      <p>Best regards,</p>
      <p>whatsnxt</p>
    `,
  };

  try {
    const response = await mailer.sendMail(mailData);
    console.log("Email sent successfully");
  } catch (error) {
    console.log(error);
  }
};

export default mailAboutPayment;
