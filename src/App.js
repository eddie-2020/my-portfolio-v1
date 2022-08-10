import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
    </div>
  );
};

export default App;
