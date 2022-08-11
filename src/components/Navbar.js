import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import SidebarData from "./shared/SidebarData.js";
import { social } from "./shared/SocialLinks.js";
import "./styles/Navbar.css";

const color = {
  close: {
    color: "#333",
  },
  ham: {
    color: "#333",
  },
};

const Navbar = () => {
  const { github, twitter, linkedin, email, social_links } = social;

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars style={color.ham} onClick={showSidebar} />
          </Link>
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
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="add-group-container container p-3 fixed-bottom">
            <a className="m-3" href={social_links.gith}>
              {github && <img src={github} width={30} alt="github" />}
            </a>
            <a className="m-3" href={social_links.link}>
              {linkedin && <img src={linkedin} width={30} alt="linkedin" />}
            </a>
            <a className="m-3" href={social_links.em}>
              {email && <img src={email} width={30} alt="email" />}
            </a>
            <a className="m-3" href={social_links.twit}>
              {twitter && <img src={twitter} width={30} alt="twitter" />}
            </a>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
