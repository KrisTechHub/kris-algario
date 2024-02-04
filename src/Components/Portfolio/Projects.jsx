import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react"
import '/styles/App.css'


const projItems = [
    {
        img: "./src/assets/projects/yelpcamp.png",
        title: "YelpCamp",
        techstack: "MongoDB, ExpressJS, NodeJS",
        desc: "A functional fullstack website where user can create new account, log in to existing account, add a new campground registered under a specific user's account, then update or delete that campground.",
        link: "https://yelpcamp-pfrl.onrender.com/campgrounds",
        source: "https://github.com/KrisTechHub/YelpCamp",
    },
    {
        img: "./src/assets/projects/news.png",
        title: "Daily News Report",
        techstack: "API, Express, Material UI, React Vite, Tailwind",
        desc: "Just a sample website execute my knowlede on API, Material Tailwind and Express.",
        link: "https://daily-news-report.onrender.com/",
        source: "https://github.com/KrisTechHub/Daily-News-Report",
    },
    {
        img: "./src/assets/projects/tierra.png",
        title: "Tierra Verde",
        techstack: "HTML, CSS3, Bootstrap5",
        desc: "A simple website built on practice for HTML, CSS, and Bootstrap5.",
        link: "https://kristechhub.github.io/Tierra-Verde/",
        source: "https://github.com/KrisTechHub/Tierra-Verde/",
    },
    {
        img: "./src/assets/projects/quiz.png",
        title: "Family Quiz",
        techstack: "HTML, CSS3, Vanila JS",
        desc: "A sample quiz app using just HTML, CSS, and Javascript.",
        link: "https://kristechhub.github.io/Quiz-App-JS/",
        source: "https://github.com/KrisTechHub/Quiz-App-JS",
    }
]

export default function Projects() {
        return (
            <div>
                {projItems.map(( { img, title, techstack, desc, link, source}, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <Card className={`flex flex-row ${isEven ? 'flex-row' : 'flex-row-reverse'} text-darkpink-800 m-10 shadow-xl`} key={title}>
                            <CardHeader className="text-center justify-center m-4 w-7/12 h-full overflow-hidden">
                                <img className="shadow-xl object-cover object-center hover:scale-110 transition-transform duration-500 transform-gpu" src={img} alt={title} />
                            </CardHeader>
                            
                            <div className="text-left w-5/12 bg-gray-100 m-5 rounded-lg p-5 ps-0">
                                <CardBody>
                                    <Typography variant="h5" className=" py-1">
                                        {title}
                                    </Typography>
                                    <Typography variant="p" className="mb-2 text-[14px]">
                                        <span className="font-bold">Tech stack:</span> {techstack}
                                    </Typography>
                                    <Typography className="">
                                        {desc}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="opacity-90 text-base">
                                    <a href={link} onClick={() => window.open(link)} rel="noopener noreferrer" target="_blank">
                                        <Button className="shadow-xl bg-gray-900 mx-2 hover:scale-105 transition-transform duration-500 transform-gpu">
                                            View Project
                                        </Button>
                                    </a>
                                    <a href={source} onClick={() => window.open(source)} rel="noopener noreferrer" target="_blank">
                                        <Button className="shadow-xl bg-darkpink-800 mx-2 hover:scale-105 transition-transform duration-500 transform-gpu">
                                            See Code
                                        </Button>
                                    </a>
                                </CardFooter>
                            </div>

                        </Card>
                    )
                })}
            </div>
        )
}   