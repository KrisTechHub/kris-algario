// import InputField from "./Input";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <div className="py-36 bg-blue-gray-100 h-screen">
            <div className="flex-row mx-auto">
                <div className="flex flex-col md:flex-row xl:px-[50px] ">
                    <div className="order-2 sm:order-1 items-center w-full lg:w-1/2 px-8 lg:px-24">
                        <ContactForm />
                    </div>

                    <div className="order-1 sm:order-2 flex items-center justify-center w-full lg:w-1/2 ">
                        <img src="./src/assets/contact-portrait.svg" alt="home portrait" />
                    </div>
                </div>
                <div className=" bg-gradient-to-r from-mypink-600 to-mypurple-400 mx-8 my-6 lg:mx-12 p-[1px] rounded-lg">
                </div>
            </div>
        </div>
    );
}