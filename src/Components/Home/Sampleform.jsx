import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes


const Sampleform = ({ source }) => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Handle form submission logic here
        console.log(`Form submtted from ${source}`);
        alert(`Form submtted from ${source}`)
    };

    return (
        <div className="container mx-auto py-10" >
            <div className="flex-row mx-auto">
                <div className="flex flex-col sm:flex-row xl:px-[50px] mt-5 sm:mt-[100px] lg:mt-2">
                    <h1>SAMPLE FORM</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Enter your name:
                            <input
                                type="text"
                            />
                        </label>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>


    );
};

Sampleform.propTypes = {
    source: PropTypes.string
};

export default Sampleform;