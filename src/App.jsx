import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from "react";
import './styles/App.css'
import NavMenu from './Components/NavMenu/NavMenu';
import SidebarDrawer from './Components/SideBar/SidebarDrawer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Contact/Footer";
import '@fortawesome/fontawesome-free/css/all.css';
import backtotop from './icons/backtotop.svg';

// import Loading from "./Components/Loading";



function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const [topClass, setTopClass] = useState('0');


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowSidebar(true);
        setIsVisible(true)
      } else {
        setShowSidebar(false);
        setIsVisible(false)
      }
    };

    // Simulate loading delay with setTimeout
    setTimeout(() => {
      setIsLoading(false);
    }, ); // Change this time to simulate your actual loading time

    // const handleClick = () => {
    //   setTopClass('top-0')
    // }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
      <Router>
          {/* { isLoading ? ( <Loading />) : ( */}
            
        <div className="flex">
              {showSidebar && <SidebarDrawer />}
                <main className="flex-1 overflow-y-auto">
                    <NavMenu />

                    <div>
                            <Home id="Home" />
                    </div>


                    <div className="bg-gradient-to-t from-blue-gray-100 to-blue-gray-50">
                          <About id="About" />
                    </div>
                    

                    <div className="bg-gradient-to-b from-blue-gray-100 to-blue-gray-50">
                          <Services id="Services" />
                    </div>


                    <div className="bg-gradient-to-t from-blue-gray-100 to-blue-gray-50">
                          <Skills id="Skills" />
                    </div>

                    <div className="bg-gradient-to-t from-blue-gray-50 to-blue-gray-100">
                          <Portfolio id="Portfolio" />
                    </div>

                    {/* <Link to="Contact" smooth={true} duration={500}> */}
                          <Contact id="Contact" />
                    {/* </Link> */}
      
                    <div className="bg-gradient-to-t from-blue-gray-100 to-blue-gray-50">
                          <Footer id="Footer" />
                    </div>

                    {isVisible && (
                      <div className="mx-auto text-end">
                        <ScrollLink to="Home" smooth={true} duration={500}>
                          <button className="back-to-top">
                            <img className="h-8 sm:h-12 md:h-14" src={backtotop} alt="" />
                          </button>
                        </ScrollLink>
                      </div>
                    )}
                </main>
            </div>
          {/* )} */}
      </Router>
      
  )
}

export default App;
