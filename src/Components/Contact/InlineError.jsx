import React from 'react'; 
import PropTypes from 'prop-types'; // Import PropTypes

export default function InlineError({error}) {
    return (
        <div className='pt-[-50px]'>
            <p className='my-1 ms-1 italic text-left text-sm text-red-600 text-sm'>{error}</p>
        </div>
    );
}

InlineError.propTypes = {
    error: PropTypes.string
};