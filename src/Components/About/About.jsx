import React from 'react';
import AboutInfo from "./AboutInfo";
import PropTypes from 'prop-types'; // Import PropTypes

export default function About({id}) {
    return (
        <div className="container mx-auto py-28" id={id}>
            <div className="flex-row mx-auto">
                <div className="flex flex-col md:flex-row xl:px-[50px]">
                    <div className="order-1 sm:order-1 items-center w-full lg:w-1/2">
                        <img src="./src/assets/about-portrait.svg" alt="home portrait" />
                    </div>

                    <div className="order-2 sm:order-2 flex items-center w-full lg:w-1/2 ">
                        <AboutInfo/>
                    </div>
                </div>
            </div>
        </div>
    );
}

About.propTypes = {
    id: PropTypes.string.isRequired
};