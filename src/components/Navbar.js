import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import SidebarData from "./shared/SidebarData.js";
import "./styles/Navbar.css";

const color = {
  close: {
    color: "#333",
  },
  ham: {
    color: "#333",
  },
  nav_link: {
    display: "flex",
    justifyContent: 'space-between'
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
            <Link to="#" className="menu-bars text-decoration-none">
              <FaIcons.FaBars style={color.ham} onClick={showSidebar} />
            <span className="fw-bolder fs-5 text-dark">PORTFOLIO MENU</span>
            </Link>
            <div>
              
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
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span className="nav-title">{item.title}</span>
                    </Link>
                  </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
