import PropTypes from 'prop-types'; // Import PropTypes



export default function Portfolio({id}) {
    return (
        <div className="container mx-auto py-28" id={id}>
            <div className="flex-row mx-auto">
                <div className="flex-row xl:px-[50px] text-center">
                    <h1 className="md:pt-10 justify-center font-JosefinBold text-[30px] lg:text-[45px] text-mypink-800">P<span className="text-[22px] lg:text-[30px]">ORTFOLIO</span></h1>

                    <p className="pt-4 md:indent-32 flex text-center font-RalewayMedium px-10 text-gray-800"> This section serves as a showcase for various projects I&#39;ve developed during 
                    my journey in web development. From personal websites to full-stack applications, each project demonstrates my skills, creativity, and problem-solving abilities. Explore 
                    the projects below to learn more about my work.
                    </p>
                </div>
            </div>
        </div>
    );
}

Portfolio.propTypes = {
    id: PropTypes.string.isRequired
};