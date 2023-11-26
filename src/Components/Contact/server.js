// required dependencies
import express from 'express';
import nodemailer from 'nodemailer';
const router = express.Router();
import cors from 'cors';


//server that will run on port 5173
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log("Server running"));


// Create a SMTP transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    service: 'gmail',
    auth: {
        user: "kmj.algario@gmail.com",
        pass: "zfcsafmnvdikvouc",
    },
    authMethod:'PLAIN',
});

// Send mail with defined transport object
transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to send");
    }
});