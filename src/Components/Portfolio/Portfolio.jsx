import PropTypes from 'prop-types'; // Import PropTypes
import Projects from './Projects';



export default function Portfolio({id}) {
    return (
        <div className="container mx-auto py-28" id={id}>
            <div className="xl:px-[50px] text-center">
                <h1 className="md:pt-10 justify-center font-JosefinBold text-[30px] lg:text-[45px] text-mypink-800">P<span className="text-[22px] lg:text-[30px]">ORTFOLIO</span></h1>

                <p className="py-4 md:indent-32 flex text-center font-RalewayMedium px-10 text-sm lg:text-base text-gray-800"> This section serves as a showcase for various projects I&#39;ve developed during
                    my learning journey in web development. I love spending time coding and encountering new opportunities and highly adaptable to new challenges and projects. Explore the projects below to learn more about my work.
                </p>

                <Projects />

            </div>
        </div>
    );
}

Portfolio.propTypes = {
    id: PropTypes.string.isRequired
};