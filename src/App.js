import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Resume from "./pages/Resume";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleThemeLight = () => {
    if (theme === "light") {
      setTheme("dark");
    }
  };

  const toggleThemeDark = () => {
    if (theme === "dark") {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <div className="theme-contents">
        <div className="theme-content-items">
          <div>
            <BsFillBrightnessHighFill
              onClick={toggleThemeDark}
              className="change-to-light-mode shadow"
              size={30}
            />
          </div>
          <div>
            <BsMoonFill
              onClick={toggleThemeLight}
              className="change-to-dark-mode shadow"
              size={25}
            />
          </div>
        </div>
      </div>
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
