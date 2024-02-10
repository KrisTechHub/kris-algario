import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailJS = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()


        emailjs
        .sendForm(
            'service_fwa85ti', 
            'template_34uyn0m', 
            form.current, {
            publicKey: 'J5K0v8k9Gbab6Chz8',
        })
        .then( 
            (result) => { 
                console.log('Message Sent!', result.text);
                
            },
            (error) => { 
                console.log('Sending Failed...', error.text);
            },
        );

        e.target.reset();
    };


    return (
        <form ref={form} onClick={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <button type="submit" value="Send" > Send</button>
        </form>
    );
};


export default EmailJS;