import { Property1GithubDefault } from "../../icons/Property1GithubDefault";
import { Property1GmailDefault } from "../../icons/Property1GmailDefault";
import { Property1Indeed } from "../../icons/Property1Indeed";
import { Property1LinkedinDefault } from "../../icons/Property1LinkedinDefault";
import { Property1UpworkDefaut } from "../../icons/Property1UpworkDefaut";
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
        <div className="container mx-auto flex w-[1152px] items-center justify-between relative">
            <div className="flex flex-row">
                <div className="grid grid-cols-2 flex-col">
                    <div className="items-start justify-center gap-[20px] relative self-stretch lg:pt-[50px]">
                        <h1>annyeonng</h1>
                    </div>


                    <div>

                    </div>
                </div>
            </div>
        </div>


    );
}
