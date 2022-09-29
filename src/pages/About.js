import React from "react";
import { about, lists } from "../components/shared/AboutData";
import * as GiBullet from "react-icons/gi";
import * as CgBorder from "react-icons/cg";
import uniqid from "uniqid";

const color = {
  icon: {
    color: "#2f4c64",
  },
  bs_1: {
    fontSize: "30px",
    color: "#dc3545",
  },
};
const About = () => {
  const { photo, title, description, description_sub_title } = about;
  if (!lists.length) return null;
  return (
    <div>
      {title && (
        <h1 className="text-center animate_ fw-bolder mt-4">{title}</h1>
      )}
      <div className="text-center">
        <CgBorder.CgBorderStyleSolid style={color.bs_1} />
      </div>
      <div className="container about_cont">
        <div className="about">
          <div>
            {description && <p>{description}</p>}
            {description_sub_title && <p>{description_sub_title}</p>}
            {lists.map((list) => (
              <p key={uniqid()}>
                <GiBullet.GiBulletBill style={color.icon} /> {list}
              </p>
            ))}
          </div>
          <div className="">
            {photo && <img className="about_img mb-4" src={photo} alt="..." />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
