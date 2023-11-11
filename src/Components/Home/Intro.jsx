//functionalities
import { useState, useEffect } from "react";
import TrackVisibility from 'react-on-screen';

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
                    <h1 className="block text-[60px] font-bold tracking-wider">{`Hi! I'm Kristine,`} <br />
                        <span className="txt-rotate" data-period="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                            <span className="border-r border-white border-solid">{text}</span>
                        </span>
                    </h1>
                    <div className="self-stretch text-stone-300 text-xl font-normal font-['Varela Round']">A fullstack Web Developer based in the Philippines.</div>
                </div>

            }
        </TrackVisibility>
    );
}
