import { Carousel, IconButton } from '@material-tailwind/react';
import PropTypes from 'prop-types'; // Import PropTypes


export default function Skills({id}) {
    return (
        <div className='container mx-auto py-28' id={id}>
            <div className='text-center'>
                <h3 className="font-JosefinBold">SKILLS</h3>
                <h1 className="justify-center font-JosefinBold text-[30px] lg:text-[45px] text-mypink-800">W<span className="text-[22px] lg:text-[30px]">hat I do</span></h1>
            </div>
            <Carousel className='rounded-xl' prevArrow={({ handlePrev }) => (
                <IconButton onClick={handlePrev} className='!absolute top-1/2 left-4 -translate-y-2/4 bg-transparent text-blue-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                        </svg>
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton onClick={handleNext} className='!absolute top-1/2 !right-4 -translate-y-2/4 bg-transparent text-blue-gray-400'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </IconButton>
                )}
            >

                <div className='flex-row'>
                    <div className='flex flex-wrap gap-7 px-32 text-center justify-center my-8'>
                        <div className='bg-mypink-900 rounded-lg text-center'>
                            <img className='h-28  p-5 mb-[-10px]' src="./src/icons/html5.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-blue-gray-50'>HTML5</h6>
                        </div>
                        <div className='bg-mypink-900 rounded-lg text-center'>
                            <img className='h-28  p-5 mb-[-10px]' src="./src/icons/css3.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-blue-gray-50'>CSS3</h6>
                        </div>
                        <div className='bg-mypink-900 rounded-lg text-center'>
                            <img className='h-28  p-5 mb-[-10px]' src="./src/icons/JS.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-blue-gray-50'>JS</h6>
                        </div>
                        <div className='bg-mypink-900 rounded-lg text-center'>
                            <img className='h-28  p-5 mb-[-10px]' src="./src/icons/SASS.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-blue-gray-50'>SASS</h6>
                        </div>
                        <div className='bg-mypink-900 rounded-lg text-center'>
                            <img className='h-28  p-5 mb-[-10px]' src="./src/icons/GIT.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-blue-gray-50'>Git/Github</h6>
                        </div>
                    </div>



                    <div className='flex flex-wrap gap-5 px-32 text-center justify-center my-8'>
                        <div className='bg-mypink-900 rounded-lg text-center'>
                            <img className='h-28  p-5 mb-[-10px]' src="./src/icons/html5.svg" alt="" />
                            <h6 className='pb-2 font-JosefinSemibold text-blue-gray-50'>HTML5</h6>
                        </div>

                        <div className='bg-mypink-800 text-center'>
                            <img className='h-24  p-3' src="./src/icons/css3.svg" alt="" />
                            <h6>HTML5</h6>
                        </div>
                    </div>



                    <div className='flex flex-wrap gap-5 px-32 text-center justify-center my-8'>
                        <div className='bg-mypink-900 rounded-lg text-center'>
                            <img className='h-28  p-5 mb-[-10px]' src="./src/icons/html5.svg" alt="" />
                            <h6 className='pb-2 font-JosefinSemibold text-blue-gray-50'>HTML5</h6>
                        </div>

                        <div className='bg-mypink-800 text-center'>
                            <img className='h-24  p-3' src="./src/icons/css3.svg" alt="" />
                            <h6>HTML5</h6>
                        </div>
                    </div>
                </div>
                
                <div className='bg-blue-800'>
                    <div className='bg-mypurple-800'>
                        <img className='h-20  p-3' src="./src/icons/css3.svg" alt="" />
                        <h6>HTML5</h6>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

Skills.propTypes = {
    id: PropTypes.string.isRequired
};