import react from "react";
import './index.css';
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import About from "./Pages/About";
import {Route, Routes} from "react-router-dom";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </>
  );
}

export default App;
