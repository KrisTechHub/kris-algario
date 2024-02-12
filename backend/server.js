// ******** THIS IS THE SERVER FILE ********

import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import path from 'path';
import EmailSender from "./SendEmail.js";


//running dotenv when in development mode, and not on production
if (process.env.NODE_ENV !== "production") {
    // Import dotenv only in non-production environment
    dotenv.config();
}



//********** STEP 5. SET UP SERVER  **********
const app = express();
const __dirname = path.resolve();
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
app.use(express.static(path.join(__dirname)));
const port = process.env.PORT || 5000;

// ********SEND API
app.post("/send", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body
        EmailSender({name, email, subject, message})
        res.json({msg: "Your message sent successfully!"});
    } catch (error) {
        res.status(404).json({ msg: "error due to ", error})
    }
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

