import React from 'react';
import CV from '/src/assets/AlgarioCV.pdf';
import html5 from '/src/icons/html5.svg';
import css3 from '/src/icons/css3.svg';
import js from '../../icons/js.svg';
import react from '../../icons/react.svg';
import git from '../../icons/git.svg';
import sass from '../../icons/sass.svg';
import bootstrap5 from '../../icons/bootstrap5.svg';
import openFile from '../../icons/open-file.svg';


export default function AboutInfo() {

    const handleDownload = () => {
        window.open(CV);
    };

    return (
        
        <div>
            <div className="flex-row items-center">
                <h3 className="font-JosefinBold pb-2 text-xs sm:text-base xl:text-xl">ABOUT ME</h3>
            </div>

            <div className="flex-row items-center">
                <h1 className="font-JosefinBold text-xl sm:text-2xl lg:text-3xl xl:text-4xl pb-2 text-mypurple-900">Why hire me for your project?</h1>
            </div>

            <div className="flex-row items-center">
                <p className="font-RalewayMedium pb-2 text-gray-800 text-sm lg:text-base">
                    Fully committed to the philosophy of life-long learning, I&#39;m a full stack developer with a deep passion for JavaScript, 
                    React and all things in web development. As a self-taught front-end developer, I have gained proficiency in React development 
                    with growing experience. My skill set includes JavaScript, CSS Frameworks, and MERN Stack. Creating visually appealing, user-friendly, 
                    and responsive web pages and applications is where my passion lies. My motivation and enthusiasm are driven by this passion, and my commitment to continuous learning keeps me humble and open to new knowledge.
                </p>
            </div>

            <div className="flex-row">
                <div className="flex flex-wrap gap-3 pt-2 pb-2">
                        <div className="rounded-full bg-mypurple-900 w-10 h-10 lg:w-12 lg:h-12">
                            <img className="w-1/7 p-2" src={html5} alt="html5" />  
                        </div>
                        <div className="rounded-full bg-mypurple-900 w-10 h-10 lg:w-12 lg:h-12">
                            <img className="p-2" src={css3} alt="css3" /> 
                        </div>
                        <div className="rounded-full bg-mypurple-900 w-10 h-10 lg:w-12 lg:h-12">
                            <img className=" p-2" src={js} alt="js" />
                        </div>
                        <div className="rounded-full bg-mypurple-900 w-10 h-10 lg:w-12 lg:h-12">
                            <img className="p-2" src={sass} alt="bootstrap5" />
                        </div>
                        <div className="rounded-full bg-mypurple-900 w-10 h-10 lg:w-12 lg:h-12">
                            <img className="p-2" src={bootstrap5} alt="sass" />
                        </div>
                        <div className="rounded-full bg-mypurple-900 w-10 h-10 lg:w-12 lg:h-12">
                            <img className="p-2" src={git} alt="git" />
                        </div>
                        <div className="rounded-full bg-mypurple-900 w-10 h-10 lg:w-12 lg:h-12">
                            <img className="p-2" src={react} alt="react" />  
                        </div>
                </div>

                <div className='pt-1'>
                        <button onClick={handleDownload} className="shadow-xl flex mt-2 md:mt-4 lg:mt-8 font-RalewayMedium tracking-wider text-white text-xs lg:text-sm rounded-lg p-1 lg:p-2 bg-gradient-to-r from-mypink-600 to-mypurple-400 hover:from-mypink-500 hover:to-mypurple-200">
                            <h1 className='text-center justify-center ps-2 p-1'>VIEW CV</h1>
                        <span className='m-auto'><img className="h-4 lg:h-6 lg:px-1" src={openFile} alt="openfile" /></span>
                        </button>
                </div>
            </div>

            <div className="flex-row items-center">

            </div>
        </div>
    )
}