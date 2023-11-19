import { Card, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react";

export default function Services() {
    return (
        <div>
            <img className="w-44 md:w-56 lg:w-auto rotate-180 absolute ml-[-65px] mt-14 md:mt-28" src="./src/icons/Design 1.svg" alt="bg design" />
            
            <div className="container mx-auto py-28">
                <div className="flex">
                    <div className="flex-row xl:px-[50px]">
                        <h1 className="md:pt-10 flex items-center justify-center font-JosefinBold text-[30px] lg:text-[45px] text-mypink-800">S<span className="text-[22px] lg:text-[30px]">ERVICES</span></h1>

                        <p className="md:indent-32 flex text-center font-RalewayMedium px-10 text-gray-800"> I offer a range of web development services designed to elevate your online presence. From creating stunning, user-friendly
                            websites to optimizing performance and ensuring seamless functionality, my expertise spans front-end and back-end technologies.
                            Let's collaborate to bring your digital vision to life with responsive design, custom solutions, and a commitment to delivering an exceptional user experience.
                        </p>

                        <div className="flex flex-wrap justify-between pt-6 2xl:px-20 ">
                            <Card className="shadow-xl mt-6 w-96 py-7 flex items-center text-center bg-mypink-900 border-2 border-blue-gray-900 text-blue-gray-100 hover:scale-105 transition-transform duration-300 transform-gpu">
                                <img className="h-20 w-20 text-blue-gray-900" src="./src/icons/webdev.svg" alt="webdev icon" />
                                <CardBody>
                                    <Typography variant="h5" className="mb-2 font-JosefinBold">
                                        Web Development
                                    </Typography>
                                    <Typography className="font-RalewayMedium ">
                                        As a Web Developer, I use coding languages like HTML5, CSS3, and Javascript to build websites.
                                    </Typography>
                                </CardBody>
                            </Card>

                            <Card className="shadow-xl mt-6 w-96 py-7 flex items-center text-center bg-mypink-900 border-2 border-blue-gray-900 text-blue-gray-100 hover:scale-105 transition-transform duration-300 transform-gpu">
                                <img className="h-20 w-20 text-blue-gray-900" src="./src/icons/uxui.svg" alt="webdev icon" />
                                <CardBody>
                                    <Typography variant="h5" className="mb-2 font-JosefinBold">
                                        UX/UI Designing
                                    </Typography>
                                    <Typography className="font-RalewayMedium ">
                                        My areas of expertise in Web Designing includes web graphic and UX/UI designing.
                                    </Typography>
                                </CardBody>
                            </Card>

                            <Card className="shadow-xl mt-6 w-96 py-7 flex items-center text-center bg-mypink-900 border-2 border-blue-gray-900 text-blue-gray-100 hover:scale-105 transition-transform duration-300 transform-gpu">
                                <img className="h-20 w-20 px-1 text-blue-gray-900" src="./src/icons/webapp.svg" alt="webdev icon" />
                                <CardBody>
                                    <Typography variant="h5" className="mb-2 font-JosefinBold">
                                        Web Application
                                    </Typography>
                                    <Typography className="font-RalewayMedium ">
                                        I offer Web Application Development built specifically for your business needs.
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>

                    </div>
                </div>
            </div>

            <img className="w-44 md:w-56 lg:w-auto float-right mr-[-64px] mt-[-130px]" src="./src/icons/Design 1.svg" alt="bg design" />
        </div>
    );
}