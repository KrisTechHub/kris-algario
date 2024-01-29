// import InputField from "./Input";
import PropTypes from 'prop-types'; // Import PropTypes
import MenuItems from '../NavMenu/MenuItems';


export default function Footer({ id }) {
    return (
        <div className="py-8 bg-gray-600 text-blue-gray-100 " id={id}>
            <div className="flex-row mx-auto ">

                <div className="flex md:flex-row xl:px-[50px] ">
                    <div className="font-RalewayLight order-2 flex-col text-center sm:order-1 flex items-center justify-center w-full w-8/12">
                        <div className='w-2/4'>
                            <MenuItems isVertical={false} showIcon={false} />
                            <p></p>
                        </div>

                        <div className=" bg-blue-gray-200 mx-8 my-4 lg:mx-12 w-8/12 border-b "></div>

                        <div className='text-center text-blue-gray-100'>
                            <p>&copy; 2024 Kristine Marie Joy Algario. All rights reserved.</p>
                        </div>
                    </div>


                    <div className="order-3 sm:order-3 flex items-center justify-center ps-36 w-full flex-col w-4/12">
                        <img className='h-24' src="./src/assets/Kwhite.svg" alt="" />
                        <h1 className='border-b mt-2 text-2xl font-JosefinSemibold'>Kristine Algario</h1>
                    </div>

                </div>

            </div>
        </div>
    );
}

Footer.propTypes = {
    id: PropTypes.string.isRequired
};