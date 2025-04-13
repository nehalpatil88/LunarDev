import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import Contact from './Components/Pages/Contact';
function App() {
  return (
    <>

    <Router>
   <Navbar/>
   <Routes>
   <Route path="/Home" element={<Home />} />
           <Route path="/About" element={<About />} />
           <Route path="/Services" element={<Services/>} />
           <Route path="/contact" element={<Contact />} />
   </Routes>
   </Router>
       </>
   
  );
}

export default App;
