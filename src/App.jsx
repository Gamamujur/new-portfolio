import React, { useState } from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Modal from "./components/Modal";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  const [showmodal,setshowmodal] = useState(false)
  const modalhandler = () =>{
    setshowmodal(!showmodal)
  }
  return (
    <>
      {showmodal && <Modal statemodal={showmodal}/>}
        <Navigation setmodal={modalhandler} statemodal={showmodal}/>
        <Home />
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      
    </>
  );
}

export default App;
