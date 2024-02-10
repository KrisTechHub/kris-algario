import Intro from "./Intro";
import './Home.css';
import PropTypes from 'prop-types'; // Import PropTypes
import Sampleform from "./Sampleform";


export default function Home({id}) {
    return (
        <div className="container mx-auto" id={id} >
            <div className="flex-row mx-auto">
                <div className="flex flex-col sm:flex-row xl:px-[50px] mt-5 sm:mt-[100px] lg:mt-2">
                    <div className="order-2 sm:order-1 flex items-center w-full lg:w-1/2 ">
                        <Intro />
                    </div>


                    <div className="order-1 sm:order-2 items-center mt-[-70px] w-full lg:w-1/2">
                        <img src="./src/assets/home-portrait.svg" alt="home portrait" />
                    </div>
                </div>
            </div>
        </div>


    );
}


Home.propTypes = {
    id: PropTypes.string.isRequired
};