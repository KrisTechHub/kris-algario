import { useState } from 'react';
import { Input, Textarea } from "@material-tailwind/react"

export default function ContactForm() {

    const [status, setStatus] = useState("Send");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, subject, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        };
        let response = await fetch("http://localhost:5173/Contact", { 
            method: "POST", 
            headers: {
                "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
    });
    setStatus("Sent");
    let result = await response.json()
    alert(result.status);
    };


    return (
        <div>
            <div className="flex-row items-center md:text-left mb-8">
                <h1 className="font-VollkornSCSemi text-4xl pb-1 text-mypurple-900">Get in Touch</h1>
                <h3 className="font-VollkornSCReg text-2xl">Tell me about your project</h3>
                <p className="font-RalewayMedium pb-1 text-gray-700 text-lg">
                    Let&apos;s create something together
                </p>
            </div>

            <form className="flex flex-col w-5/6 gap-5 mx-auto md:mx-0" onSubmit={handleSubmit}>
                <Input id='name' required color="purple" label="Name" className="caret-purple-600 " />
                <Input id='email' required color="purple" label="Your Email" />
                <Input id='subject' required color="purple" label="Subject" />
                <Textarea id='message' required color="purple" label="Message" />

                <button type='submit' className="font-RalewayMedium tracking-wider text-white text-sm rounded-lg px-6 py-2 bg-gradient-to-r from-darkpink-800 to-mypurple-900 hover:from-mypink-800 hover:to-mypurple-900">
                    {status}
                </button>
            </form>
        </div>
    )
}