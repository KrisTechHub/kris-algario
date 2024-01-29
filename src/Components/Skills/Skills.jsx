import PropTypes from 'prop-types'; // Import PropTypes


export default function Skills({id}) {
    return (
        <div className='container mx-auto py-28' id={id}>
            <div className='text-center'>
                <div className='shadow-xl flex bg-gray-50 rounded-xl mx-[550px] items-center justify-center'>
                    <div className='w-1/8 m-4 bg-mypink-900 rounded-xl h-6 w-7'></div>
                    <h3 className="w-10/12 font-JosefinBold text-xl tracking-wider text-mypink-800">SKILLS</h3>
                    <div className='w-1/8 m-4 bg-mypink-900 rounded-xl h-6 w-7'></div>
                </div>
                <h1 className="my-6 font-JosefinBold text-[30px] lg:text-[45px] text-mypink-800">W<span className="text-[22px] lg:text-[30px]">hat I do</span></h1>
            </div>

            <div className='rounded-xl shadow-xl bg-mypink-900 py-5 mx-auto w-3/4' >
                <div className='flex-row'>
                    <div className='flex flex-wrap gap-10 lg:px-32 text-center justify-center my-8'>
                        <div className='shadow-xl bg-blue-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 transform-gpu'>
                            <img className='w-28 h-28  p-5 mb-[-10px]' src="./src/icons/html5.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-mypink-800'>HTML5</h6>
                        </div>

                        <div className='shadow-xl bg-blue-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 transform-gpu'>
                            <img className='w-28 h-28  p-5 mb-[-10px]' src="./src/icons/css3.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-mypink-800'>CSS3</h6>
                        </div>

                        <div className='shadow-xl bg-blue-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 transform-gpu'>
                            <img className='w-28 h-28  p-5 mb-[-10px]' src="./src/icons/JS.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-mypink-800'>JS</h6>
                        </div>

                        <div className='shadow-xl bg-blue-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 transform-gpu'>
                            <img className='w-28 h-28  p-5 mb-[-10px]' src="./src/icons/SASS.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-mypink-800'>SASS</h6>
                        </div>

                        <div className='shadow-xl bg-blue-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 transform-gpu'>
                            <img className='w-28 h-28  p-5 mb-[-10px]' src="./src/icons/GIT.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-mypink-800'>Git/Github</h6>
                        </div>
                    </div>



                    <div className='flex flex-wrap  gap-10 lg:px-32 text-center justify-center my-8'>
                        <div className='shadow-xl bg-blue-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 transform-gpu'>
                            <img className='w-28 h-28  p-5 mb-[-10px]' src="./src/icons/bootstrap5.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-mypink-800'>Bootstrap5</h6>
                        </div>

                        <div className='shadow-xl bg-blue-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 transform-gpu'>
                            <img className='w-28 h-28  p-5 mb-[-10px]' src="./src/icons/tailwind.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-mypink-800'>Tailwind</h6>
                        </div>

                        <div className='shadow-xl bg-blue-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 transform-gpu'>
                            <img className='w-28 h-28  p-5 mb-[-10px]' src="./src/icons/materialui.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-mypink-800'>Material UI</h6>
                        </div>

                        <div className='shadow-xl bg-blue-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 transform-gpu'>
                            <img className='w-28 h-28  p-5 mb-[-10px]' src="./src/icons/canva.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-mypink-800'>Canva</h6>
                        </div>

                        <div className='shadow-xl bg-blue-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 transform-gpu'>
                            <img className='w-28 h-28  p-5 mb-[-10px]' src="./src/icons/figma.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-mypink-800'>Figma</h6>
                        </div>
                    </div>



                    <div className='flex flex-wrap gap-10 lg:px-32 text-center justify-center my-8'>
                        <div className='shadow-xl bg-blue-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 transform-gpu'>
                            <img className='w-28 h-28  p-5 mb-[-10px]' src="./src/icons/react.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-mypink-800'>react</h6>
                        </div>

                        <div className='shadow-xl bg-blue-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 transform-gpu'>
                            <img className='w-28 h-28 p-5 mb-[-10px]' src="./src/icons/express.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-mypink-800'>ExpressJS</h6>
                        </div>

                        <div className='shadow-xl bg-blue-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 transform-gpu'>
                            <img className='h-28 w-28  p-5 mb-[-10px]' src="./src/icons/mongodb.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-mypink-800'>MongoDB</h6>
                        </div>

                        <div className='shadow-xl bg-blue-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 transform-gpu'>
                            <img className='w-28 h-28  p-5 mb-[-10px]' src="./src/icons/mysql.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-mypink-800'>MySQL</h6>
                        </div>

                        <div className='shadow-xl bg-blue-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 transform-gpu'>
                            <img className='w-28 h-28  p-5 mb-[-10px]' src="./src/icons/Node.svg" alt="" />
                            <h6 className='pb-4 font-JosefinSemibold text-mypink-800'>NodeJS</h6>
                        </div>
                    </div>
                </div>
                
                {/* <div className='bg-blue-800'>
                    <div className='bg-mypurple-800'>
                        <img className='h-20  p-3' src="./src/icons/css3.svg" alt="" />
                        <h6>HTML5</h6>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

Skills.propTypes = {
    id: PropTypes.string.isRequired
};