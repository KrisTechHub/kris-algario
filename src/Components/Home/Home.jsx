// import { Property1GithubDefault } from "../../icons/Property1GithubDefault";
// import { Property1GmailDefault } from "../../icons/Property1GmailDefault";
// import { Property1Indeed } from "../../icons/Property1Indeed";
// import { Property1LinkedinDefault } from "../../icons/Property1LinkedinDefault";
// import { Property1UpworkDefaut } from "../../icons/Property1UpworkDefaut";
import { Button } from "../Button";
import Intro from "./Intro";
import './Home.css'
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Home() {
    return (
        <div className="container mx-auto">
            <div className="flex-row">
                <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 flex items-center gap-[20px]">
                        <Intro />
                    </div>


                    <div className="flex-1 items-center justify-content mt-[-70px]">
                        <img src="./src/assets/home-portrait.svg" alt="home portrait" />
                    </div>
                </div>
            </div>
        </div>


    );
}
