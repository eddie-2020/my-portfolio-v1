import React from "react";
import uniqid from "uniqid";
import { experience } from "./ResumeData";

const Experience = () => {
  if (!experience.length) return null;
  return (
    <div className="m-4">
      {experience.map((exp) => (
        <div key={uniqid()} className="text-dark">
          <h5 className="text-uppercase text-dark fw-bolder mt-4">
            {exp.title}
          </h5>
          <span style={font.desc}>{exp.description}</span>
          <li className="mt-0" style={font.built_with}>
            {exp.built_with}
          </li>
          <hr />
        </div>
      ))}
    </div>
  );
};

const font = {
  built_with: {
    fontSize: "15px",
  },
  desc: {
    fontSize: "17px",
  },
};
export default Experience;
