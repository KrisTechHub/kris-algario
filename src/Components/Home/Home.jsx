import Intro from "./Intro";
import './Home.css'
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Home() {
    return (
        <div className="container mx-auto">
            <div className="flex-row">
                <div className="flex flex-col sm:flex-row w-[1325px]">
                    <div className="order-2 sm:order-1 flex items-center gap-[20px]">
                        <Intro />
                    </div>


                    <div className="order-1 sm:order-2 items-center justify-content mt-[-70px]">
                        <img src="./src/assets/home-portrait.svg" alt="home portrait" />
                    </div>
                </div>
            </div>
        </div>


    );
}
