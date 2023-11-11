// import { Property1GithubDefault } from "../../icons/Property1GithubDefault";
// import { Property1GmailDefault } from "../../icons/Property1GmailDefault";
// import { Property1Indeed } from "../../icons/Property1Indeed";
// import { Property1LinkedinDefault } from "../../icons/Property1LinkedinDefault";
// import { Property1UpworkDefaut } from "../../icons/Property1UpworkDefaut";
import { Button } from "../Button";
import './Home.css'

//functionalities
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import TrackVisibility from 'react-on-screen';

export default function Home() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);


    return (
        <div className="container mx-auto">
            <div className="flex-row">
                <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 items-start justify-center gap-[20px] relative self-stretch lg:pt-[100px] md:pt-[100px] bg-gray-50">
                        <div className="relative bg-gradient-to-r from-mypink-600 to-mypurple-400 hover:from-mypink-500 hover:to-mypurple-200 text-white font-semibold py-2 px-4 rounded-lg">
                            Welcome to my Portfolio
                        </div>
                    </div>


                    <div className="flex-1 items-center justify-content">
                        <img className="w-80%" src="./src/assets/home-portrait.svg" alt="home portrait" />
                    </div>
                </div>
            </div>
        </div>


    );
}
