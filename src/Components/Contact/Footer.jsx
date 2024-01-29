// import InputField from "./Input";
import PropTypes from 'prop-types'; // Import PropTypes


export default function Footer({ id }) {
    return (
        <div className="py-8 bg-mypink-900 text-gray-200" id={id}>
            <div className="flex-row mx-auto">

                <div className="flex flex-col md:flex-row xl:px-[50px] ">
                    <div className="order-2 sm:order-1 flex items-center justify-center w-full border-gray-400 border-r-2 h-36">
                       footer 1st col 
                    </div>

                    <div className="order-1 sm:order-2 flex items-center justify-center w-full border-gray-400 border-r-2 h-36">
                        footer 2nd col

                    </div>

                    <div className="order-3 sm:order-3 flex items-center justify-center w-full ">
                        footer 3rd col
                    </div>

                </div>

            </div>
        </div>
    );
}

Footer.propTypes = {
    id: PropTypes.string.isRequired
};