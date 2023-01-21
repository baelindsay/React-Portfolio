// import Container from './components/Container';
import '../src/assets/App.css';
// import Header from './components/Header';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import About from "./components/pages/About"
import Portfolio from "./components/pages/Portfolio"

// import { Route, Routes } from "react-router-dom"

// import {
//   BrowserRouter as Router, 
//   Switch, 
//   Route, 
//   Link
// } from "react-router-dom";

// function App() {
//   return (
//     <>
//     <Header />
//     <Navbar />
//       {/* <Routes>
//         <Route path="/" element={ <About />} />
//         <Route path="/portfolio" element={ <Portfolio />} />
//         <Route path="/contact" element={ <Contact />} />
//         <Route path="/resume" element={ <Resume />} />
//       </Routes> */}
//     <Container />
//     <Footer />
//     </>

//   );
// }

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <About />
      break;

      default:
        component = <About />
      break;

    case "/portfolio":
      component = <Portfolio />
      break;

  }

  return (
  <>
    <Navbar />
    {component}
  </>
  )
}
export default App;

    // case "/contact":
    //   break
    // case "/resume":
    //   break
