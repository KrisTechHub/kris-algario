import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import NavMenu from './Components/NavMenu/NavMenu'
import SidebarDrawer from './Components/SideBar/SidebarDrawer'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio'



function App() {

  return (
      <Router>
          <NavMenu />
          <div className="flex">
              <SidebarDrawer />
              <main className="flex-1 overflow-y-auto p-4">
                <Routes>
                  <Route path="/Home" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Skills" element={<Skills />} />
                  <Route path="/Services" element={<Services />} />
                  <Route path="/Portfolio" element={<Portfolio />} />
                </Routes>
              </main>
          </div>
      </Router>
  )
}

export default App;
