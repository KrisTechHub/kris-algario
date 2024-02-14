import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes


const skills = [
    {
        skill: "HTML5",
        img: "./src/icons/html5.svg"
    },
    {
        skill: "CSS3",
        img: "./src/icons/css3.svg"
    },
    {
        skill: "Javascript",
        img: "./src/icons/js.svg"
    },
    {
        skill: "React",
        img: "./src/icons/react.svg"
    },
    {
        skill: "Git",
        img: "./src/icons/git.svg"
    },
    {
        skill: "Github",
        img: "./src/icons/githubblack.svg"
    },
    {
        skill: "My SQL",
        img: "./src/icons/mysql.svg"
    },
    {
        skill: "Node JS",
        img: "./src/icons/node.svg"
    },
    {
        skill: "SASS",
        img: "./src/icons/sass.svg"
    },
    {
        skill: "Bootstrap5",
        img: "./src/icons/bootstrap5.svg"
    },
    {
        skill: "Tailwind",
        img: "./src/icons/tailwind.svg"
    },
    {
        skill: "Material UI",
        img: "./src/icons/materialui.svg"
    },
    {
        skill: "Canva",
        img: "./src/icons/canva.svg"
    },
    {
        skill: "Figma",
        img: "./src/icons/figma.svg"
    },
    {
        skill: "Express",
        img: "./src/icons/express.svg"
    },
    {
        skill: "Mongo DB",
        img: "./src/icons/mongodb.svg"
    }
]

export default function Skills({id}) {
    return (
        <div className='container mx-auto py-12' id={id}>
            <div className='text-center mx-auto'>
                <div className='shadow-xl mx-auto bg-gray-50 rounded-xl w-1/2 lg:w-1/3 h-12 md:h-14'>
                    <div className='flex items-center'>
                        <div className='m-4 bg-mypink-900 rounded-xl h-4 w-4 sm:h-6 sm:w-6'></div>
                        <h3 className="flex-1 font-JosefinBold text-xl tracking-wider text-mypink-800">SKILLS</h3>
                        <div className='m-4 bg-mypink-900 rounded-xl h-4 w-4 sm:h-6 sm:w-6'></div>
                    </div>
                </div>
                <h1 className="my-6 font-JosefinBold text-3xl lg:text-4xl text-mypink-800">What I do</h1>


                <div className='rounded-xl shadow-xl bg-darkpink-800 py-5 mx-auto w-4/5 sm:w-3/4' >
                    <div className='flex-row'>
                        <div className='flex flex-wrap gap-5 md:gap-8 lg:gap-10 px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 text-center justify-center my-8'>

                            {skills.map(( {img, skill} ) => {
                                return (
                                    <div key={skill} className='shadow-xl bg-blue-gray-100 rounded-lg text-center hover:scale-105 transition-transform duration-300 transform-gpu'>
                                        <img className='w-24 h-24 sm:w-28 sm:h-28 p-5 mb-[-10px]' src={img} alt="" />
                                        <h6 className='pb-4 font-JosefinSemibold text-mypink-800'>{skill}</h6>
                                    </div>
                                )
                            } )}

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
        </div>
    );
}

Skills.propTypes = {
    id: PropTypes.string.isRequired
};