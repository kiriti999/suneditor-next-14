/* eslint-disable import/no-anonymous-default-export */
import Cors from "cors";
import initMiddleware from "@/lib/init-middleware";
import nodemailer from 'nodemailer';

//Access environment variables
const envVars = process.env;

const mailer = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    secure: true,
    secureConnection: false,
    tls: {
        ciphers: 'SSLv3'
    },
    requireTLS: true,
    port: 465,
    debug: true,
    auth: {
        user: envVars.email,
        pass: envVars.emailPassword,
    },
});

// Initialize the cors middleware
const cors = initMiddleware(
    Cors({
        methods: ["POST"],
    })
);

export default async (req, res) => {
    await cors(req, res);
    const { name, email } = req.body;
    const mailData = {
        to: email,
        from: envVars.email,
        subject: "Payment confirmation",
        html: `<h1>Course Purchase Confirmation</h1>
      <br/>
        <p>Dear ${name},</p>
        <p>Thank you for purchasing the course. We hope you enjoy it!</p>
        <p>If you have any questions or need assistance, please don't hesitate to contact us.</p>
        <p>Best regards,</p>
        <p>Whatsnxt</p>
      `,
    };

    try {
        await mailer.sendMail(mailData);
        console.log("Email sent successfully");
        res.send({
            status: "success",
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "Failed",
        })
    }
};
