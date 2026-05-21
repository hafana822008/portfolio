import React from "react";
import Navbar from "./components/Navbar"
import About from "./components/About";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/skills";
import Contact from "./components/Contact";
import Footer from  "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
     <Navbar />
      <Home />
       <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />;
    </div>
  );
}

export default App;