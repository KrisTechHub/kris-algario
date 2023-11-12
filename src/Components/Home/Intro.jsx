import { Property1GithubDefault } from "../../icons/Property1GithubDefault";
import { Property1GmailDefault } from "../../icons/Property1GmailDefault";
import { Property1Indeed } from "../../icons/Property1Indeed";
import { Property1LinkedinDefault } from "../../icons/Property1LinkedinDefault";
import { Property1UpworkDefaut } from "../../icons/Property1UpworkDefaut";

//functionalities
import { useState, useEffect } from "react";
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-router-dom';


export default function Intro() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1)
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        
        <TrackVisibility>
            {({ isVisible }) =>
                <div className={isVisible ? "animate__animated aimate__fadeIn" : ""}>
                    <div className="relative bg-gradient-to-r from-mypink-600 to-mypurple-400 hover:from-mypink-500 hover:to-mypurple-200 text-white font-semibold py-2 px-4 rounded-lg w-[220px]">
                        Welcome to my Portfolio
                    </div>

                    <h1 className="block text-[50px] font-bold tracking-wider">{`Hi! I'm Kristine,`} <br />
                        <span className="txt-rotate" data-period="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                            <span className="border-r border-white border-solid">{text}</span>
                        </span>
                    </h1>

                    <div className="self-stretch text-stone-300 text-xl font-normal font-['Varela Round']">A fullstack Web Developer based in the Philippines.</div>

                    <div className="inline-flex my-3">
                        <button className="rounded-md w-[110px] py-1 border border-mypink-600 border-[2px] hover:border-mypink-100">
                            Contact me
                        </button>

                        <div className="inline-flex items-center gap-[20px] ps-5">
                            <Link to="www.github.com"><Property1GithubDefault className="w-[20px] h-[20px]" /></Link>
                            <button><Property1LinkedinDefault className="w-[20px] h-[20px]" /></button>
                            <button><Property1UpworkDefaut className="w-[20px] h-[20px]" /></button>
                            <button><Property1GmailDefault className="w-[20px] h-[20px]" /></button>
                            <button><Property1Indeed className="w-[20px] h-[20px]"/></button>
                        </div>
                    </div>

                    <p className="relative self-stretch [font-family:'Varela_Round',Helvetica] font-normal text-variable-collection-mid-gray text-[16px] tracking-[0] leading-[normal]">
                        <span className="text-[#bfbfbf] font-paragraph [font-style:var(--paragraph-font-style)] font-[number:var(--paragraph-font-weight)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] text-[length:var(--paragraph-font-size)]">
                            Get to know me{" "}
                        </span>
                        <a href="https://me.com" rel="noopener noreferrer" target="_blank">
                            <span className="text-[#d13d9f] underline">more here</span>
                        </a>
                    </p>
                </div>
            }
        </TrackVisibility>
    );
}
