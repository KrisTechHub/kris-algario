import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import html5 from '../../icons/html5.svg';
import css3 from '../../icons/css3.svg';
import js from '../../icons/js.svg';
import react from '../../icons/react.svg';
import git from '../../icons/git.svg';
import githubblack from '../../icons/githubblack.svg';
import mysql from '../../icons/mysql.svg';
import node from '../../icons/node.svg';
import sass from '../../icons/sass.svg';
import bootstrap5 from '../../icons/bootstrap5.svg';
import tailwind from '../../icons/tailwind.svg';
import materialui from '../../icons/materialui.svg';
import canva from '../../icons/canva.svg';
import figma from '../../icons/figma.svg';
import express from '../../icons/express.svg';
import mongodb from '../../icons/mongodb.svg';



const skills = [
    {
        skill: "HTML5",
        img:  html5 
    },
    {
        skill: "CSS3",
        img:  css3 
    },
    {
        skill: "Javascript",
        img:  js 
    },
    {
        skill: "React",
        img:  react 
    },
    {
        skill: "Git",
        img:  git 
    },
    {
        skill: "Github",
        img:  githubblack 
    },
    {
        skill: "My SQL",
        img:  mysql 
    },
    {
        skill: "Node JS",
        img:  node 
    },
    {
        skill: "SASS",
        img:  sass 
    },
    {
        skill: "Bootstrap5",
        img:  bootstrap5 
    },
    {
        skill: "Tailwind",
        img:  tailwind 
    },
    {
        skill: "Material UI",
        img:  materialui 
    },
    {
        skill: "Canva",
        img:  canva 
    },
    {
        skill: "Figma",
        img:  figma 
    },
    {
        skill: "Express",
        img:  express 
    },
    {
        skill: "Mongo DB",
        img:  mongodb 
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