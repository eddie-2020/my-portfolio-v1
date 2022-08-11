import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GoIcons from "react-icons/go";
import * as GiIcons from "react-icons/gi"

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome color="#dc3545" />,
    cName: "nav-text",
  },
  {
    title: "Skills",
    path: "/skills",
    icon: <GiIcons.GiSkills color="#dc3545" />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <GoIcons.GoProject color="#dc3545" />,
    cName: "nav-text",
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <IoIcons.IoIosPaper color="#dc3545" />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaUser color="#dc3545" />,
    cName: "nav-text",
  },
];

export default SidebarData;
