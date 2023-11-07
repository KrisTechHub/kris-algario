import { Property1GithubDefault } from "../../icons/Property1GithubDefault";
import { Property1GmailDefault } from "../../icons/Property1GmailDefault";
import { Property1Indeed } from "../../icons/Property1Indeed";
import { Property1LinkedinDefault } from "../../icons/Property1LinkedinDefault";
import { Property1UpworkDefaut } from "../../icons/Property1UpworkDefaut";
import { Button } from "../Button";
import './Home.css'

//functionalities
import


export default function Home() {
    return (
        
            <div className="flex w-[1152px] items-center justify-between relative">
                <div className="flex flex-col w-[576px] items-start justify-center gap-[20px] relative self-stretch lg:ps-5">
                    <div className="relative bg-gradient-to-r from-mypink-600 to-mypurple-400 hover:from-mypink-500 hover:to-mypurple-200 text-white font-semibold py-2 px-4 rounded-lg">
                        Welcome to my Portfolio
                    </div>
                    
                    <h1>{`Hi! I'm Kristine,`} <br />
                        <span className="txt-rotate" data-period="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                            <span className="wrap">{text}</span>
                        </span>
                    </h1>

                    <p className="relative self-stretch font-header-6 font-[number:var(--header-6-font-weight)] text-variable-collection-mid-gray text-[length:var(--header-6-font-size)] tracking-[var(--header-6-letter-spacing)] leading-[var(--header-6-line-height)] [font-style:var(--header-6-font-style)]">
                        A fullstack Web Developer based in the Philippines.
                    </p>

                    <Button
                        buttonText="Contact Me"
                        className="![background:linear-gradient(180deg,rgba(108.42,0,159.44,0.96)_0%,rgba(164.89,0,108.83,0.96)_100%)] !w-[129px]"
                        divClassName="!mr-[unset] !ml-[unset]"
                        importance="default"
                    />
                    <p className="relative self-stretch [font-family:'Varela_Round',Helvetica] font-normal text-variable-collection-mid-gray text-[16px] tracking-[0] leading-[normal]">
                        <span className="text-[#bfbfbf] font-paragraph [font-style:var(--paragraph-font-style)] font-[number:var(--paragraph-font-weight)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] text-[length:var(--paragraph-font-size)]">
                            Get to know me{" "}
                        </span>
                        <a href="https://me.com" rel="noopener noreferrer" target="_blank">
                            <span className="text-[#d13d9f] underline">more here</span>
                        </a>
                    </p>
                    <div className="inline-flex items-center justify-center gap-[20px] absolute top-[415px] left-[154px]">
                        <Property1GithubDefault className="!relative !w-[20px] !h-[20px]" color="#BFBFBF" />
                        <Property1LinkedinDefault className="!relative !w-[20px] !h-[20px]" color="#BFBFBF" />
                        <Property1UpworkDefaut className="!relative !w-[20px] !h-[15px]" />
                        <Property1GmailDefault className="!relative !w-[20px] !h-[14px]" />
                        <Property1Indeed className="!relative !w-[20px] !h-[20px]" color="#BFBFBF" />
                    </div>
                </div>


                 <div className="relative w-[643px] h-[629px]">
                    <div className="relative top-[-90px] flex left-[150px]">
                        <img src="./src/assets/home-portrait.svg" alt="home portrait" />
                    </div>
                </div>
            </div>

    );
}
