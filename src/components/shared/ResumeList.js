import React from "react";
import uniqid from "uniqid";
import { resume_skills_lists } from "./ResumeData";
import * as GiBullet from "react-icons/gi";

const ResumeList = () => {
  if (!resume_skills_lists.length) return null;

  return (
    <div className="container">
      {resume_skills_lists.map((resume_skill) => (
        <p
          key={uniqid()}
          style={skill_font.list}
          className="text-dark align-items-center mt-3"
        >
          <GiBullet.GiBulletBill style={skill_font.icon} /> {resume_skill}
        </p>
      ))}
    </div>
  );
};

const skill_font = {
  list: {
    fontSize: "16px",
  },
  icon: {
    color: "#2f4c64",
  },
};

export default ResumeList;
