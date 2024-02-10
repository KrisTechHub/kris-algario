import { useEffect, useState } from 'react';
import { validateEmail, validateName, validateMessage } from "./Validation";

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    useEffect(() => {
        //************VALIDATION*************
        validateName({ name, setNameError }) //call function from Validate.js

    },[name])

    console.log(nameError);

    return (
        <div>
            <div className="flex-row items-center md:text-left mb-8">
                <h1 className="font-VollkornSCSemi text-2xl sm:text-4xl pb-1 text-mypurple-900">Get in Touch</h1>
                <h3 className="font-VollkornSCReg text-lg sm:text-2xl">Tell me about your project</h3>
                <p className="font-RalewayMedium pb-1 text-gray-700 text-xs sm:text-lg">
                    Let&apos;s create something together
                </p>
            </div>

            <form className="flex flex-col w-5/6 gap-5 mx-auto md:mx-0" >
                <div className="my-6">
                    <label>FullName</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        type="text"
                        placeholder="User Doe"
                        
                    />
                </div>


            </form>


        </div>
    );
}