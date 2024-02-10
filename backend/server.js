// ******** THIS IS THE SERVER FILE ********

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import EmailSender from "./SendEmail.js";



//********** STEP 5. SET UP SERVER  **********
dotenv.config(); // used to load variables from .env file into process.env in Node.js applications
const app = express();
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
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

