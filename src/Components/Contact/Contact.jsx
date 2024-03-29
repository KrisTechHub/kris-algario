// import InputField from "./Input";
import React from 'react';
import ContactForm from "./ContactForm";
import PropTypes from 'prop-types'; // Import PropTypes
import contactPortrait from '../../assets/contact-portrait.svg';


export default function Contact({id}) {
    return (
        
        <div className="py-24 xl:px-16 bg-blue-gray-100 border-t-2 border-mypink-800" id={id}>
            <div className="flex-row mx-auto">
                <div className="flex flex-col md:flex-row xl:px-[50px] ">

                    <div className="order-2 md:order-1 items-center text-center w-full lg:w-1/2 px-8 lg:px-24">
                        <ContactForm />
                    </div>


                    <div className="order-1 md:order-2 flex items-center justify-center w-full lg:w-1/2 ">
                        <img className="w-96 xl:w-auto" src={contactPortrait} alt="home portrait" />
                    </div>

                </div>

            </div>
        </div>
    );
}

Contact.propTypes = {
    id: PropTypes.string.isRequired
};