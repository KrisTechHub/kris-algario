// import InputField from "./Input";
import PropTypes from 'prop-types'; // Import PropTypes


export default function Footer({ id }) {
    return (
        <div className="py-8 bg-darkpink-800 text-gray-200" id={id}>
            <div className="flex-row mx-auto">

                <div className="flex flex-col md:flex-row xl:px-[50px] ">
                    <div className="order-2 sm:order-1 flex items-center justify-center w-full h-36">
                       <div className='w-2/4'>
                            <h1 className='font-bold'>Socials</h1>
                            <p></p>
                       </div>
                    </div>

                    <div className="order-1 sm:order-2 flex items-center justify-center w-full h-36">
                        footer 2nd col

                    </div>

                    <div className="order-3 sm:order-3 flex items-center justify-center ps-36 w-full flex-col">
                        <img className='h-24' src="./src/assets/Kwhite.svg" alt="" />
                        <h1 className='border-t mt-2 text-2xl font-JosefinBold'>Kristine Algario</h1>
                    </div>

                </div>

            </div>
        </div>
    );
}

Footer.propTypes = {
    id: PropTypes.string.isRequired
};