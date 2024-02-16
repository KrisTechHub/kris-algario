//functionalities
import React from 'react';
import { useState, useEffect } from "react";
import TrackVisibility from 'react-on-screen';
import { Link as ScrollLink } from 'react-scroll';
import github from '../../icons/github.svg';
import linkedin from '../../icons/linkedin.svg';
import upwork from '../../icons/upwork.svg';
import gmail from '../../icons/gmail.svg';
import indeed from '../../icons/indeed.svg';






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
                    <span className="shadow-xl bg-gradient-to-r ms-1 from-mypink-600 to-mypurple-400 hover:from-mypink-500 hover:to-mypurple-200 hidden md:inline-block text-[12px] text-white font-semibold py-2 px-4 rounded-lg">
                        Welcome to my Portfolio
                    </span>

                    <h1 className="pt-4 block text-4xl lg:text-5xl xl:text-6xl tracking-wider font-JosefinBold xs:justify-content">{`Hi! I'm Kristine,`} <br />
                        <span className="txt-rotate" data-period="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                            <span className="border-r border-white border-solid">{text}</span>
                        </span>
                    </h1>

                    <div className="self-stretch text-gray-700 lg:text-lg xl:text-xl font-normal font-RalewayMedium">A fullstack Web Developer based in the Philippines.</div>

                    <div className="inline-flex my-1 lg:my-3 py-2">
                        <ScrollLink to="Contact" smooth={true} duration={500} className="shadow-lg text-xs md:text-sm  xl:text-base rounded-md py-[6px] px-4 border border-mypink-600 border-[2px] hover:border-black font-RalewayMedium cursor-pointer">
                            CONTACT ME
                        </ScrollLink>


                        <div className="inline-flex items-center gap-2 sm:gap-4 lg:gap-5 ps-5">
                            <a onClick={() => window.open("https://www.github.com/KrisTechHub")} rel="noopener noreferrer">
                                <img className="w-[20px] h-[20px] cursor-pointer" src={github}/>
                            </a>

                            <a onClick={() => window.open("https://www.linkedin.com/in/kmjalgario")} rel="noopener noreferrer" target="_blank">
                                <img className="w-[20px] h-[20px] cursor-pointer" src={linkedin}/>
                            </a>

                            <a onClick={() => window.open("https://www.upwork.com/freelancers/~014703744c9fc2e64f")} rel="noopener noreferrer" target="_blank">
                                <img className="w-[20px] h-[20px] cursor-pointer" src={upwork} />
                            </a>

                            <ScrollLink to="Contact" smooth={true} duration={500}>
                                <img className="w-[20px] h-[20px]" src={gmail} />
                            </ScrollLink>

                            <a onClick={() => window.open("https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-jobseeker-profile--profile-one-frontend")} rel="noopener noreferrer" target="_blank">
                                <img className="w-[20px] h-[20px] cursor-pointer" src={indeed} />
                            </a>
                        </div>
                    </div>

                    <p className="pt-2 self-stretch [font-family:'Varela_Round',Helvetica] font-normal text-variable-collection-mid-gray text-[16px] tracking-[0] leading-[normal]">
                        <span className="text-gray-600 font-paragraph [font-style:var(--paragraph-font-style)] font-[number:var(--paragraph-font-weight)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] text-[length:var(--paragraph-font-size)]">
                            Get to know me more{" "}
                        </span>

                        <ScrollLink to='About' smooth={true} duration={300}>
                            <span className="text-mypink-600 underline cursor-pointer">here</span>.
                        </ScrollLink>

                    </p>
                </div>
            }
        </TrackVisibility>
    );
}
