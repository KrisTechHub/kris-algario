import React from 'react';
import { Card, CardBody, Typography, Button, } from "@material-tailwind/react";
import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from 'react-scroll';
import webdev from '../../icons/webdev.svg';
import uxui from '../../icons/uxui.svg';
import webapp from '../../icons/webapp.svg';
import design1 from '../../icons/design1.png';


const service = [
    {
        icon: webdev,
        title: "Web Development",
        desc: "As a Web Developer, I use coding languages like HTML5, CSS3, and Javascript to build websites."
    },
    {
        icon:  uxui ,
        title: "UX/UI Designing",
        desc: "My areas of expertise in Web Designing includes web graphic and UX/UI designing."
    },
    {
        icon:  webapp ,
        title: "Web Application",
        desc: "I offer Web Application Development built specifically for your business needs."
    },
]
 
export default function Services({id}) {
    return (
        <div id={id} >
            <img className="h-48 lg:h-72 xl:h-80 rotate-180 absolute mt-14 md:mt-28" src={design1} alt="bg design" />
            
            <div className="container mx-auto py-28">
                <div className="flex">
                    <div className="flex-row xl:px-[50px] text-center">
                        <h1 className="md:pt-10 justify-center font-JosefinBold text-[30px] lg:text-[45px] text-mypink-800">S<span className="text-[22px] lg:text-[30px]">ERVICES</span></h1>

                        <p className="text-sm lg:text-base pt-4 md:indent-32 flex text-center font-RalewayMedium px-10 text-gray-800"> I offer a range of web development services designed to elevate your online presence. From creating stunning, user-friendly
                            websites to optimizing performance and ensuring seamless functionality, my expertise spans front-end and back-end technologies.
                            Let&#39;s collaborate to bring your digital vision to life with responsive design, custom solutions, and a commitment to delivering an exceptional user experience.
                        </p>

                        <div className="flex flex-wrap justify-between pt-6 2xl:px-20 ">
                            {service.map(( {icon, title, desc} ) => {
                                return (
                                    <Card key={title} className="shadow-xl mt-6 mx-2 sm:w-48 md:w-60 lg:w-80 xl:w-[350px] 2xl:w-96 py-7 flex items-center text-center bg-mypink-900 border-2 border-blue-gray-900 text-blue-gray-100 hover:scale-105 transition-transform duration-300 transform-gpu">
                                        <img className="h-12 md:h-16 lg:h-18 text-blue-gray-900" src={icon} alt="webdev icon" />
                                        <CardBody className="p-2 md:p-4">
                                            <Typography className="text-base lg:text-lg xl:text-xl mb-2 font-JosefinBold">
                                                {title}
                                            </Typography>
                                            <Typography className="text-sm font-RalewayMedium ">
                                                {desc}
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                )
                            })}
                        </div>

                        <Link to="Portfolio" smooth={true} duration={500} className="inline-block py-10 pt-6 flex inline-flex gap-2 text-lg hover:bg-transparent font-JosefinBold hover:scale-110 transition-transform duration-300 transform-gpu">
                                <Button size="lg" variant="text" className="pt-6 flex inline-flex gap-2 text-lg hover:bg-transparent font-JosefinBold hover:scale-110 transition-transform duration-300 transform-gpu">
                                    See Projects
                                    <i className="pt-[2px] fas fa-chevron-down"></i>
                                </Button>
                        </Link>


                    </div>
                </div>
            </div>

            <img className="h-48 lg:h-72 xl:h-80 float-right  mt-[-200px]" src={design1} alt="bg design" />
        </div>
    );
}

Services.propTypes = {
    id: PropTypes.string.isRequired
};