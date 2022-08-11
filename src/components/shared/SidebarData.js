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
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Skills",
    path: "/skills",
    icon: <GiIcons.GiSkills />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <GoIcons.GoProject />,
    cName: "nav-text",
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaUser />,
    cName: "nav-text",
  },
];

export default SidebarData;
