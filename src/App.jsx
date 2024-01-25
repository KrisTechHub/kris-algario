
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
                <Routes>
                  <Route path="/Home" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Skills" element={<Skills />} />
                  <Route path="/Services" element={<Services />} />
                  <Route path="/Portfolio" element={<Portfolio />} />
                  <Route path="/Contact" element={<Contact />} />
                </Routes>
              </main>
          </div>
          <Home />
          <About />
          <Services />
          <Skills />
          <Portfolio />
          <Contact />
      </Router>
      
  )
}

export default App;
