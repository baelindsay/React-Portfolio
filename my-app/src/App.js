import Container from './components/Container';
import '../src/assets/App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// import {
//   BrowserRouter as Router, 
//   Switch, 
//   Route, 
//   Link
// } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
    <Navbar />
    <Container />
    <Footer />
    </>

  );
}

export default App;
