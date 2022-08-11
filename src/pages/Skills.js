import React from "react";
import { skills } from "../components/shared/SkillsData";
import { Link } from "react-router-dom";

const Skills = () => {
  
  const {
    javascript,
    photo,
    react,
    sql,
    ruby,
    rails,
    html,
    css,
    heroku,
    github,
  } = skills;

  return (
    <div className="skills d-flex align-items-center justify-content-evenly container">
      <div className="">
        <div className="d-flex flex-wrap">
          {javascript && (
            <img className="m-4" src={javascript} alt="javascript" width={60} />
          )}
          {react && <img className="m-4" src={react} alt="react" width={60} />}
          {sql && <img className="m-4" src={sql} alt="postgres" width={60} />}
          {ruby && <img className="m-4" src={ruby} alt="ruby" width={60} />}
          {rails && <img className="m-4" src={rails} alt="rails" width={60} />}
          {html && <img className="m-4" src={html} alt="html" width={60} />}
          {css && <img className="m-4" src={css} alt="css" width={60} />}
          {heroku && (
            <img className="m-4" src={heroku} alt="heroku" width={60} />
          )}
          {github && (
            <img className="m-4" src={github} alt="github" width={60} />
          )}
        </div>
        <div className="col-md-6 offset-md-4">
          <Link
            to="/projects"
            className="btn btn-lg btn-outline-secondary text-light text-center"
            style={{ fontSize: "16px" }}
          >
            View Projects
          </Link>
        </div>
      </div>
      <div>{photo && <img src={photo} alt="skill_photo" width={800} />}</div>
    </div>
  );
};

export default Skills;
