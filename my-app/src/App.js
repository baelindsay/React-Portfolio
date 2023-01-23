// import Container from './components/Container';
import '../src/assets/App.css';
// import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from "./components/pages/About"
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact"
import Resume from "./components/pages/Resume"

import { Route, Routes } from "react-router-dom"

// import {
//   BrowserRouter as Router, 
//   Switch, 
//   Route, 
//   Link
// } from "react-router-dom";

function App() {
  return (
    
    <div className='page-container'>
      <div className='content-wrap'>
        <Navbar />
          <Routes>
            <Route path="/aboutme" element={ <About />} />
            <Route path="/portfolio" element={ <Portfolio />} />
            <Route path="/contact" element={ <Contact />} /> 
            <Route path="/resume" element={ <Resume />} />
          </Routes>
          <br />
          <br />
          <br />
          <br />

          <Footer />
        </div>
    </div>

  );
}

export default App;

    // case "/contact":
    //   break
    // case "/resume":
    //   break
