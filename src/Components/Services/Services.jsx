import { Card, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react";

export default function Services() {
    return (
        <div>
            <img className="rotate-180 absolute ml-[-65px] mt-28" src="./src/icons/Design 1.svg" alt="bg design" />
            
            <div className="container mx-auto py-28">
                <div className="flex">
                    <div className="flex-row xl:px-[50px]">
                        <h1 className="pt-10 flex items-center justify-center font-JosefinBold text-[30px] lg:text-[45px] text-mypink-800">S<span className="text-[22px] lg:text-[30px]">ERVICES</span></h1>

                        <p className="indent-32 flex text-center font-RalewayMedium px-10 text-gray-800"> I offer a range of web development services designed to elevate your online presence. From creating stunning, user-friendly
                            websites to optimizing performance and ensuring seamless functionality, my expertise spans front-end and back-end technologies.
                            Let's collaborate to bring your digital vision to life with responsive design, custom solutions, and a commitment to delivering an exceptional user experience.
                        </p>

                        <div className="flex flex-wrap gap-6 pt-6">
                            <Card className="mt-6 w-96 py-7 flex items-center text-center bg-mypink-900 hover:bg-blue-gray-50 border-2 border-blue-gray-900 text-blue-gray-100 hover:text-mypink-800">
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

                            
                        </div>

                    </div>
                </div>
            </div>

            <img className=" absolute ml-[-65px] justify-end" src="./src/icons/Design 1.svg" alt="bg design" />
        </div>
    );
}