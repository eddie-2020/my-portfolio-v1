import React from "react";
import uniqid from "uniqid";
import { resume_skills_lists } from "./ResumeData";

const ResumeList = () => {
  if (!resume_skills_lists.length) return null;

  return (
    <div className="container">
      {resume_skills_lists.map((resume_skill) => (
        <li key={uniqid()} style={skill_font} className="text-dark">
          {resume_skill}
        </li>
      ))}
    </div>
  );
};

const skill_font = {
  fontSize: "16px",
};

export default ResumeList;
