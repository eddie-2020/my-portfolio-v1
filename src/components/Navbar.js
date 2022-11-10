import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as Download from "react-icons/ai"
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import onButtonClick from "./shared/Download_Resume.js";
import SidebarData from "./data/SidebarData.js";
import "./styles/Navbar.css";

const color = {
  close: {
    color: "#dc3545",
  },
  ham: {
    color: "#dc3545",
  },
  nav_link: {
    display: "flex",
    justifyContent: "space-between",
  },
};

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div>
          <div className="navbar">
            <div className="tool-bar">
              <Link to="#" className="menu-bars text-decoration-none tool-bar-txt">
                <div className="ham-details">
                  <FaIcons.FaBars className="ham-icon" style={color.ham} onClick={showSidebar} />
                  <span className="fw-bolder detailed-ham text-light">MENU</span>
                </div>
                <div className="download">
                  <button onClick={onButtonClick} className="btn btn-lg btn-danger download-txt"><span className="win-download-size">Download</span> Resume <Download.AiOutlineCloudDownload className="cloud-download-icon"/></button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose style={color.close} />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <div className="nav-content">
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="nav-title">{item.title}</span>
                  </Link>
                </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
