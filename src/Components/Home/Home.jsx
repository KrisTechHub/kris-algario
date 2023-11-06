import { Property1GithubDefault } from "../../icons/Property1GithubDefault";
import { Property1GmailDefault } from "../../icons/Property1GmailDefault";
import { Property1Indeed } from "../../icons/Property1Indeed";
import { Property1LinkedinDefault } from "../../icons/Property1LinkedinDefault";
import { Property1UpworkDefaut } from "../../icons/Property1UpworkDefaut";
import { Button } from "../Button";

export default function Home() {
    return (
        
            <div className="flex w-[1152px] items-center justify-between relative flex-[0_0_auto]">
                <div className="flex flex-col w-[480px] items-start justify-center gap-[20px] relative self-stretch">
                    <div className="relative self-stretch font-header-4 font-[number:var(--header-4-font-weight)] text-[#fefefef5] text-[length:var(--header-4-font-size)] tracking-[var(--header-4-letter-spacing)] leading-[var(--header-4-line-height)] [font-style:var(--header-4-font-style)]">
                        Welcome to my Portfolio
                    </div>
                    <img
                        className="relative self-stretch w-full flex-[0_0_auto]"
                        alt="My name is kristine"
                        src="/img/my-name-is-kristine-algario.png"
                    />
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
                    <div className="relative w-[695px] h-[750px] top-[-90px] left-[5px]">
                        <div className="absolute w-[70px] h-[70px] top-[248px] left-[429px] bg-[#320021] rounded-[35px]" />
                        <div className="absolute w-[30px] h-[30px] top-[193px] left-[620px] rounded-[15px] rotate-[-88.55deg] [background:linear-gradient(180deg,rgba(111.76,0,73.76,0.78)_0%,rgba(50.14,0,33.09,0.75)_100%)]" />
                        <img
                            className="absolute w-[652px] h-[594px] top-[125px] left-[31px]"
                            alt="Yellow bg"
                            src="/img/yellow-bg-4.svg"
                        />
                        <img className="absolute w-[695px] h-[750px] top-0 left-0" alt="Yellow bg" src="/img/yellow-bg-2.svg" />
                        <img className="absolute w-[651px] h-[717px] top-[2px] left-[32px]" alt="Image" src="/img/image.png" />
                        <div className="absolute w-[120px] h-[120px] top-[383px] left-[105px] rounded-[60px] [background:linear-gradient(180deg,rgba(50.14,0,33.09,0.33)_0%,rgba(50.14,0,33.09,0.13)_69.45%,rgba(50.14,0,33.09,0.07)_92.6%,rgba(50.14,0,33.09,0.04)_100%)]" />
                        <div className="absolute w-[120px] h-[120px] top-[559px] left-[175px] rounded-[60px] [background:linear-gradient(180deg,rgba(50.14,0,33.09,0.33)_0%,rgba(50.14,0,33.09,0.13)_69.45%,rgba(50.14,0,33.09,0.07)_92.6%,rgba(50.14,0,33.09,0.04)_100%)]" />
                        <div className="absolute w-[130px] h-[130px] top-[173px] left-[524px] rounded-[65px] [background:linear-gradient(180deg,rgba(72.04,0,47.54,0.28)_0%,rgba(90.51,0,59.74,0.49)_100%)]" />
                        <div className="absolute w-[130px] h-[130px] top-[606px] left-[553px] rounded-[65px] [background:linear-gradient(180deg,rgba(72.04,0,47.54,0.28)_0%,rgba(90.51,0,59.74,0.49)_100%)]" />
                        <div className="absolute w-[40px] h-[40px] top-[81px] left-[304px] bg-[#320021f5] rounded-[20px]" />
                        <div className="top-[434px] left-[175px] absolute w-[50px] h-[50px] rounded-[25px] [background:linear-gradient(180deg,rgba(111.76,0,73.76,0.78)_0%,rgba(50.14,0,33.09,0.75)_100%)]" />
                        <div className="absolute w-[70px] h-[70px] top-[218px] left-[77px] bg-[#380025] rounded-[35px]" />
                        <div className="top-[81px] left-[324px] rotate-[91.07deg] absolute w-[50px] h-[50px] rounded-[25px] [background:linear-gradient(180deg,rgba(111.76,0,73.76,0.78)_0%,rgba(50.14,0,33.09,0.75)_100%)]" />
                    </div>
                </div>
            </div>
    );
}
