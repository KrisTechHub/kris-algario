import React, { useEffect, useState } from 'react';
import { Input, Textarea, Button } from "@material-tailwind/react";
import { validateName, validateEmail, validateSubject, validateMessage } from "./Validation"
import InlineError from './InlineError';
import { IpAdress, SendEmail } from '../../../backend/API';
import Toast from './Toast';
import {toast}  from 'react-toastify';


export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [subjectError, setSubjectError] = useState();
    const [messageError, setMessageError] = useState();
    // const [ipData, setIpData] = useState();
    const [buttonLoading, setButtonLoading] = useState(false);
    const [send, setSend] = useState();

    useEffect(() => {
        // if (!ipData) {
        //     IpAdress({setIpData});
        // };

        //************STEP 2. ADD VALIDATION*************
        validateName({ name, setNameError }); //call function from Validate.js
        validateEmail({ email, setEmailError });
        validateSubject({ subject, setSubjectError });
        validateMessage({ message, setMessageError });


        //************** TOAST ALERT FOR MSG SENT SUCCESSFULY
        if (send) {
            toast.success(send.msg);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setSend();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps add ipData below
    }, [name, email, subject, message, send]);


    //********** STEP 6. INTEGRATE API IN CLIENT SIDE  **********
    //call API (SendEmail.js) upon submitting the form
    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonLoading(true);
        if (!nameError & !emailError & !subjectError & !messageError) {
            SendEmail({ name, email, subject, message, setSend })
            .then(() => { 
                setButtonLoading(false);
            }
            );
        } 
    };


    return (
        <>
            <Toast />
            <div>   
                <div className="flex-row items-center md:text-left mb-8">
                    <h1 className="font-VollkornSCSemi text-2xl sm:text-4xl pb-1 text-mypurple-900">Get in Touch</h1>
                    <h3 className="font-VollkornSCReg text-lg sm:text-2xl">Tell me about your project</h3>
                    <p className="font-RalewayMedium pb-1 text-gray-700 text-xs sm:text-lg">
                        {/* Thank you for reaching me out from {ipData && ipData}. */}
                        Let&apos;s create something together
                    </p>
                </div>

            {/************* STEP 1. CREATE THE FORM **************/}
                <form onSubmit={handleSubmit} className="flex flex-col w-5/6 gap-5 mx-auto md:mx-0" >
                    <div>
                        <Input value={name} onChange={(e) => setName(e.target.value)} required type="text" color="purple" label="Name" />
                        {nameError && <InlineError error={nameError} />}
                    </div>

                    <div>
                        <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required color="purple" label="Your Email" />
                        {emailError && <InlineError error={emailError} />}
                    </div>

                    <div>
                        <Input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required color="purple" label="Subject" />
                        {subjectError && <InlineError error={subjectError} />}
                    </div>

                    <div>
                        <Textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} required color="purple" label="How can I help you?" />
                        {messageError && <InlineError error={messageError} />}
                    </div>

                    <Button type="submit" disabled={buttonLoading && true} className="font-RalewayMedium tracking-wider text-white text-sm rounded-lg px-6 py-2 bg-gradient-to-r from-darkpink-800 to-mypurple-900 hover:from-mypink-800 hover:to-mypurple-900">
                        {buttonLoading ? "Loading..." : "Submit"}
                    </Button>
                    
                </form>

            </div>
        </>
    )
};
