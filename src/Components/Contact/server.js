// required dependencies
import express from 'express';
import nodemailer from 'nodemailer';
const router = express.Router();
import cors from 'cors';
import path from 'path'



//server that will run on port 5173
const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());

// app.use('/', router);
app.use(express.static(path.join(__dirname, 'dev')));



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
router.post("/Contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "kmj.algario@gmail.com",
        subject: `${subject}`,
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>`,
    };
    transporter.sendMail(mail,(error) => {
        if (error) {
            console.log(error);
            res.json({ status: "ERROR"});
        } else {
            console.log("email sent");
            res.json({status: "Message Sent" });
        }
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dev', 'index.html'));
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => console.log(`Server running. Listening on Port ${PORT}`));

