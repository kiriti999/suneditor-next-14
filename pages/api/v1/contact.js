import nodemailer from 'nodemailer';
const dotenv = require('dotenv');
const path = require('path');

//Load environment variables from .env file
// dotenv.config({ path: __dirname + '/./rootscope/.env' });
// dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
// dotenv.config({ path: `../../../.env.${process.env.NODE_ENV}` })

//Access environment variables
const envVars = process.env;
console.log(envVars);

const mailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: envVars.email,
        pass: envVars.emailPassword
    }
});

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { name, email, number, subject, text } = req.body;
    console.log(name, email, number, subject, text);
    const data = {
        to: 'support@rootscope.in',
        from: email,
        subject: 'Hi there',
        text: text,
        html: `
            <b>From:</b> ${name} <br />
            <b>Number:</b> ${number} <br />
            <b>Subject:</b> ${subject} <br />
            <b>Text:</b> ${text}
        `
    };

    try {
        const response = await mailer.sendMail(data);
        console.log('success');
        res.status(200).send("Email sent successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error sending email");
    }
}
