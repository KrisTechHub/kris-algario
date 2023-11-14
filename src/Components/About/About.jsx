import AboutInfo from "./AboutInfo";

export default function About() {
    return (
        <div className="container mx-auto">
            <div className="flex-row mx-auto">
                <div className="flex flex-col sm:flex-row xl:px-[50px]">
                    <div className="order-2 sm:order-1 items-center w-full lg:w-1/2">
                        <img src="./src/assets/about-portrait.svg" alt="home portrait" />
                    </div>

                    <div className="order-1 sm:order-2 flex items-center w-full lg:w-1/2 ">
                        <AboutInfo/>
                    </div>
                </div>
            </div>
        </div>
    );
}