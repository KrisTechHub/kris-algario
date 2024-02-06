// import InputField from "./Input";
import PropTypes from 'prop-types'; // Import PropTypes
import MenuItems from '../NavMenu/MenuItems';
import { PhoneArrowDownLeftIcon, EnvelopeIcon } from "@heroicons/react/24/solid";


export default function Footer({ id }) {
    return (
        <div className="py-8 bg-darkpink-800 text-blue-gray-100 " id={id}>
            <div className="flex-row mx-auto ">

                <div className="flex flex-col lg:flex-row font-RalewayLight">

                    <div className="flex flex-col text-center items-center justify-center lg:w-[68%] order-2 lg:order-1">
                        <div className='w-full flex justify-center'>
                            <MenuItems className="px-2 sm:px-6 text-sm hover:bg-transparent hover:text-white" isVertical={false} showIcon={false} />
                        </div>
                            <div className="inline-flex items-center gap-3 sm:gap-8 p-3 sm:p-5">
                            <a href="https://github.com/KrisTechHub" onClick="window.open(`https://github.com/KrisTechHub`)" rel="noopener noreferrer" target="_blank"><img className="hover:scale-110 w-[20px] h-[20px]" src="./src/icons/github.svg" /></a>
                            <a href="https://www.linkedin.com/in/kmjalgario" onClick="window.open(`hhttps://www.linkedin.com/in/kmjalgario`)" rel="noopener noreferrer" target="_blank"><img className="hover:scale-110 w-[20px] h-[20px]" src="./src/icons/linkedin.svg" /></a>
                            <a href="https://www.upwork.com/freelancers/~014703744c9fc2e64f" onClick="window.open(`https://www.upwork.com/freelancers/~014703744c9fc2e64f`)" rel="noopener noreferrer" target="_blank"><img className="hover:scale-110 w-[20px] h-[20px]" src="./src/icons/upwork.svg" /></a>
                            <a href="https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-jobseeker-profile--profile-one-frontend" onClick="window.open(`https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-jobseeker-profile--profile-one-frontend`)" rel="noopener noreferrer" target="_blank"><img className="hover:scale-110 w-[20px] h-[20px]" src="./src/icons/indeed.svg" /></a>
                            <a href="https://www.instagram.com" onClick="window.open(`hhttps://www.instagram.com`)" rel="noopener noreferrer" target="_blank"><img className="hover:scale-110 w-[20px] h-[20px]" src="./src/icons/insta.svg" /></a>
                            <a href="https://facebook.com" onClick="window.open(`https://facebook.com`)" rel="noopener noreferrer" target="_blank"><img className="hover:scale-110 w-[20px] h-[20px]" src="./src/icons/fb.svg" /></a>
                            <a href="https://twitter.com" onClick="window.open(`https://twitter.com`)" rel="noopener noreferrer" target="_blank"><img className="hover:scale-110 w-[20px] h-[20px]" src="./src/icons/twitter.svg" /></a>
                            </div>
                        <div className=" border-blue-gray-300 mx-8 my-4 lg:mx-12 w-6/12 border-b "></div>
                        <div className='text-center text-blue-gray-100 text-xs'>
                            <p>&copy; 2024 Kristine Marie Joy Algario. All rights reserved.</p>
                        </div>
                    </div>


                    <div className='flex flex-row justify-center lg:w-[32%] order-1 lg:order-2'>
                        <div className="flex flex-col justify-center text-center items-center w-1/2 pb-4 lg:p">
                            <h1 className='font-bold pb-2'>Contact Details:</h1>
                            <div className='flex flex-row items-right text-sm lg:text-base'>
                                <div className='flex items-center justify-center pe-1'>
                                    <EnvelopeIcon className="h-4 w-5 text-gray-400" />
                                </div>
                                <p>kmj.algario@gmail.com</p>
                            </div>
                            <div className='flex flex-row items-right pb-1 text-sm lg:text-base'>
                                <div className='flex items-center justify-center pe-1'>
                                    <PhoneArrowDownLeftIcon className="h-4 w-5 text-gray-400" />
                                </div>
                                <p>+63 956 305 1174</p>
                            </div>
                        </div>


                        <div className="lg:flex flex-col items-center hidden text-center justify-center w-1/2">
                            <img className='lg:h-16 xl2:h-24' src="./src/assets/Kwhite.svg" alt="" />
                            <h1 className='border-b mt-2 font-JosefinSemibold'>Kristine Algario</h1>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

Footer.propTypes = {
    id: PropTypes.string.isRequired
};