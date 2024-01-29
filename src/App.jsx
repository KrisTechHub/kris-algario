
import { BrowserRouter as Router } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from "react";
import '/styles/App.css'
import NavMenu from './Components/NavMenu/NavMenu'
import SidebarDrawer from './Components/SideBar/SidebarDrawer'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Contact/Footer";


function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <Router>
          <NavMenu />

          <div className="flex">
            {showSidebar && <SidebarDrawer />}
              <main className="flex-1 overflow-y-auto">
                  <ScrollLink to="Home" smooth={true} duration={500}>
                    <Home id="Home" />
                  </ScrollLink>

                  <div className="bg-gradient-to-t from-blue-gray-100 to-blue-gray-50">
                      <ScrollLink to="About" smooth={true} duration={500}>
                        <About id="About" />
                      </ScrollLink>
                  </div>
                  

                  <div className="bg-gradient-to-b from-blue-gray-100 to-blue-gray-50">
                      <ScrollLink to="Services" smooth={true} duration={500}>
                        <Services id="Services" />
                      </ScrollLink>
                  </div>


                  <div className="bg-gradient-to-t from-blue-gray-100 to-blue-gray-50">
                      <ScrollLink to="Skills" smooth={true} duration={500}>
                        <Skills id="Skills" />
                      </ScrollLink>
                  </div>
                  <ScrollLink to="Portfolio" smooth={true} duration={500}>
                    <Portfolio id="Portfolio" />
                  </ScrollLink>
                  <ScrollLink to="Contact" smooth={true} duration={500}>
                    <Contact id="Contact" />
                  </ScrollLink>   
    
                  <div className="bg-gradient-to-t from-blue-gray-100 to-blue-gray-50">
                      <ScrollLink to="Footer" smooth={true} duration={500}>
                        <Footer id="Footer" />
                      </ScrollLink>  
                  </div>

                  <div className="mx-auto text-end">
                    <ScrollLink to="Home" smooth={true} duration={500}>
                      <button className="back-to-top">
                        Back to Top
                      </button>
                    </ScrollLink>
                  </div>
              </main>
          </div>

      </Router>
      
  )
}

export default App;
