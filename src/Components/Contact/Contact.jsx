// import InputField from "./Input";
import ContactForm from "./ContactForm";
import PropTypes from 'prop-types'; // Import PropTypes


export default function Contact({id}) {
    return (
        
        <div className="py-24 bg-blue-gray-100 border-t-2 border-mypink-800" id={id}>
            <div className="flex-row mx-auto">
                <div className="flex flex-col md:flex-row xl:px-[50px] ">

                    <div className="order-2 md:order-1 items-center text-center w-full lg:w-1/2 px-8 lg:px-24">
                        <ContactForm />
                    </div>


                    <div className="order-1 md:order-2 flex items-center justify-center w-full lg:w-1/2 ">
                        <img src="./src/assets/contact-portrait.svg" alt="home portrait" />
                    </div>

                </div>

            </div>
        </div>
    );
}

Contact.propTypes = {
    id: PropTypes.string.isRequired
};