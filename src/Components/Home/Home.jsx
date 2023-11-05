import './Home.css'

const Image = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
                <div className="w-[1440px] h-[725px] pb-24 flex-col justify-center items-center inline-flex">
                    <div className="w-[1152px] justify-between items-center inline-flex">
                        <div className="w-[480px] self-stretch flex-col justify-center items-start gap-5 inline-flex">
                            <div className="self-stretch text-white text-opacity-95 text-3xl font-normal font-['Vollkorn SC']">Welcome to my Portfolio</div>
                            <div className="self-stretch"><span className="text-white text-[40px] font-normal font-['Varela Round'] leading-[55px]">My name is</span><span className="text-white text-[50px] font-semibold font-['Vollkorn SC'] leading-[55px]"> <br /></span><span className="text-pink-600 text-[50px] font-semibold font-['Vollkorn SC'] leading-[55px]">Kristine Algario</span><span className="text-white text-[50px] font-semibold font-['Vollkorn SC'] leading-[55px]"> </span></div>
                            <div className="self-stretch text-stone-300 text-xl font-normal font-['Varela Round']">A fullstack Web Developer based in the Philippines.</div>
                            <div className="w-[129px] h-[49px] px-5 py-4 bg-gradient-to-r from-purple-800 to-pink-700 rounded-lg justify-center items-center gap-2.5 inline-flex">
                                <div className="text-white text-base font-normal font-['Varela Round']">Contact Me</div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>






            <div className="col-span-1">
                <div className="relative w-[643px] h-[629px]">
                    <div className="relative w-[695px] h-[750px] top-[-90px] left-[5px]">
                        <div className="absolute w-[70px] h-[70px] top-[248px] left-[429px] bg-[#320021] rounded-[35px]" />
                        <div className="absolute w-[30px] h-[30px] top-[193px] left-[620px] rounded-[15px] rotate-[-88.55deg] [background:linear-gradient(180deg,rgba(111.76,0,73.76,0.78)_0%,rgba(50.14,0,33.09,0.75)_100%)]" />
                        <img className="absolute w-[652px] h-[594px] top-[125px] left-[31px]" alt="Yellow bg" src="./src/Components/Home/imgs/gradientbg.svg" />
                        <img className="absolute w-[695px] h-[750px] top-0 left-0" alt="Yellow bg" src="./src/Components/Home/imgs/purplebg.svg" />
                        <img className="absolute w-[651px] h-[717px] top-[2px] left-[32px]" alt="Image" src="./src/Components/Home/imgs/portrait1.png" />
                        <div className="absolute w-[120px] h-[120px] top-[383px] left-[105px] rounded-[60px] [background:linear-gradient(180deg,rgba(50.14,0,33.09,0.33)_0%,rgba(50.14,0,33.09,0.13)_69.45%,rgba(50.14,0,33.09,0.07)_92.6%,rgba(50.14,0,33.09,0.04)_100%)]" />
                        <div className="absolute w-[120px] h-[120px] top-[559px] left-[175px] rounded-[60px] [background:linear-gradient(180deg,rgba(50.14,0,33.09,0.33)_0%,rgba(50.14,0,33.09,0.13)_69.45%,rgba(50.14,0,33.09,0.07)_92.6%,rgba(50.14,0,33.09,0.04)_100%)]" />
                        <div className="absolute w-[130px] h-[130px] top-[173px] left-[524px] rounded-[65px] [background:linear-gradient(180deg,rgba(72.04,0,47.54,0.28)_0%,rgba(90.51,0,59.74,0.49)_100%)]" />
                        <div className="absolute w-[130px] h-[130px] top-[606px] left-[553px] rounded-[65px] [background:linear-gradient(180deg,rgba(72.04,0,47.54,0.28)_0%,rgba(90.51,0,59.74,0.49)_100%)]" />
                        <div className="absolute w-[40px] h-[40px] top-[81px] left-[304px] bg-[#320021f5] rounded-[20px]" />
                        <div className="absolute w-[50px] h-[50px] top-[434px] left-[175px] rounded-[25px] [background:linear-gradient(180deg,rgba(111.76,0,73.76,0.78)_0%,rgba(50.14,0,33.09,0.75)_100%)]" />
                        <div className="absolute w-[70px] h-[70px] top-[218px] left-[77px] bg-[#380025] rounded-[35px]" />
                        <div className="absolute w-[50px] h-[50px] top-[81px] left-[324px] rounded-[25px] rotate-[91.07deg] [background:linear-gradient(180deg,rgba(111.76,0,73.76,0.78)_0%,rgba(50.14,0,33.09,0.75)_100%)]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    return (
        <Image />
    );
}