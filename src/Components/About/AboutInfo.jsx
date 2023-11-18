export default function AboutInfo() {
    return (
        <div>
            <div className="flex-row items-center">
                <h3 className="font-JosefinBold pb-1">ABOUT ME</h3>
            </div>

            <div className="flex-row items-center">
                <h1 className="font-JosefinBold text-4xl pb-1 text-mypurple-900">Why hire me for your project?</h1>
            </div>

            <div className="flex-row items-center">
                <p className="font-RalewayMedium pb-1 text-gray-800">
                    As a self-taught front-end developer, I have gained proficiency in React development with growing experience. My skill set includes JavaScript, CSS Frameworks, and MERN Stack. Creating visually appealing, user-friendly, and responsive web pages and applications is where my passion lies. My motivation and enthusiasm are driven by this passion, and my commitment to continuous learning keeps me humble and open to new knowledge. 
                </p>
            </div>

            <div className="flex-row sm:justify-content">
                <div className="flex flex-wrap gap-3 pt-2">
                        <div className="rounded-full bg-mypurple-900">
                            <img className="w-1/7 p-2" src="./src/icons/html5.svg" alt="html5" />  
                        </div>
                        <div className="rounded-full bg-mypurple-900">
                            <img className="w-1/7 p-2" src="./src/icons/css3.svg" alt="css3" /> 
                        </div>
                        <div className="rounded-full bg-mypurple-900">
                            <img className="w-1/7 p-2" src="./src/icons/js.svg" alt="js" />
                        </div>
                        <div className="rounded-full bg-mypurple-900">
                            <img className="w-1/7 p-2" src="./src/icons/bootstrap5.svg" alt="bootstrap5" />
                        </div>
                        <div className="rounded-full bg-mypurple-900">
                            <img className="w-1/7 p-2" src="./src/icons/sass.svg" alt="sass" />
                        </div>
                        <div className="rounded-full bg-mypurple-900">
                            <img className="w-1/7 p-2" src="./src/icons/git.svg" alt="git" />
                        </div>
                        <div className="rounded-full bg-mypurple-900">
                            <img className="w-1/7 p-2" src="./src/icons/react.svg" alt="react" />  
                        </div>
                </div>

                <a href='' download='' target="_blank" rel="noopener noreferrer">
                    <button className="mt-4 font-RalewayMedium tracking-wider text-white text-sm rounded-lg p-2 bg-gradient-to-r from-mypink-600 to-mypurple-400 hover:from-mypink-500 hover:to-mypurple-200">
                        DOWNLOAD CV
                    </button>
                </a>
            </div>

            <div className="flex-row items-center">

            </div>
        </div>
    )
}