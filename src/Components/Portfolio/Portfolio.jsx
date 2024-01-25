import PropTypes from 'prop-types'; // Import PropTypes



export default function Portfolio({id}) {
    return (
        <div id={id}>
            <h1>Portfolio page</h1>
        </div>
    );
}

Portfolio.propTypes = {
    id: PropTypes.string.isRequired
};