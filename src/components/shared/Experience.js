import React from "react";
import uniqid from "uniqid";
import { experience } from "./ResumeData";
import * as GiBullet from "react-icons/gi";

const Experience = () => {
  if (!experience.length) return null;
  return (
    <div className="">
      {experience.map((exp) => (
        <div key={uniqid()} className="text-dark">
          <h5 className="text-uppercase text-dark fw-bolder mt-4">
            {exp.title}
          </h5>
          <p style={font.desc}>{exp.description}</p>
          <p className="mt-0" style={font.built_with}>
            <GiBullet.GiBulletBill style={font.icon} /> {exp.built_with}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

const font = {
  built_with: {
    fontSize: "16px",
  },
  desc: {
    fontSize: "16px",
  },
  icon: {
    color: "#2f4c64",
  },
};
export default Experience;
