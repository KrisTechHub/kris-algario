import React from 'react'; 
import { Input, Textarea } from "@material-tailwind/react"

export default function InputField() {
    return (
        <div>
            <div className="flex-row items-center mb-8">
                <h1 className="font-VollkornSCSemi text-4xl pb-1 text-mypurple-900">Get in Touch</h1>
                <h3 className="font-VollkornSCReg text-2xl">Tell me about your project</h3>
                <p className="font-RalewayMedium pb-1 text-gray-700 text-lg">
                    Let&apos;s create something together
                </p>
            </div>

            <div className="flex flex-col w-5/6 gap-5">
                <Input color="purple" label="Name" className="caret-purple-600 "/>
                <Input color="purple" label="Your Email" />
                <Input color="purple" label="Subject" />
                <Textarea color="purple" label="Message" />

                <button className="font-RalewayMedium tracking-wider text-white text-sm rounded-lg px-6 py-2 bg-gradient-to-r from-mypink-600 to-mypurple-400 hover:from-mypink-500 hover:to-mypurple-200">
                    Send
                </button>

            </div>
        </div>
    )
}