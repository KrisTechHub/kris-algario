// ******** THIS IS THE TRANSPOTER FILE ********

import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config(); 

//********** STEP 4. SET UP NODEMAILER ********** (For email only)

const Email = (options) => {
    // create reusable transport method (opens pool of SMTP connections)
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });
    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log("Error sending email",err);
            return;
        } else {
            console.log("Email sent successfully:", info.response);
        }
    });
};


//********** SEND EMAIL **********
// setup e-mail data with unicode symbols
const EmailSender = ({ name, email, subject, message }) => {
    const options = {
        from: `${name} <${process.env.USER}>`,
        to: process.env.SEND_TO,
        subject: subject,
        html: `
            <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
                <div style="max-width: 700px; background-color: white; margin: 0 auto">
                    <div style="width: 100%; background-color: #00efbc; padding: 20px 0">
                        <a href="${process.env.CLIENT_URL}" >
                            <img src="./kris.svg" style="width: 100%; height: 70px; object-fit: contain" />
                        </a> 
                    </div>

                    <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
                        <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
                            From Kris Portfolio
                        </p>
                        <div style="font-size: .8rem; margin: 0 30px">
                            <p>Name: <b>${name}</b></p>
                            <p>Email: <b>${email}</b></p>
                            <p>Subject: <b>${subject}</b></p>
                            <p>Message: <i>${message}</i></p>
                        </div>
                    </div>
                </div>
            </div>
        `,
    };
    Email(options)//call Email function
};

export default EmailSender;