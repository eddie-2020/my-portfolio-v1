import React from "react";
import { skills } from "../components/data/SkillsData";
import * as CgBorder from "react-icons/cg";
import ProgressBar from "../components/shared/ProgressBar";

const Skills = () => {
  const {
    javascript,
    photo,
    react,
    sql,
    ruby,
    rails,
    html,
    sass,
    bootstrap,
    cs,
    heroku,
    git,
  } = skills;

  const border = {
    bs_1: {
      fontSize: "30px",
      color: "#dc3545",
    },
  };
  return (
    <div className="skills_cont container">
      <h1 className="text-center animate_ fw-bolder mt-2">Technical Skills</h1>
      <div className="text-center">
        <CgBorder.CgBorderStyleSolid style={border.bs_1} />
      </div>
      <div className="skills-sec">
      <div className="skills container">
        <div className="">
          <div className="d-flex flex-wrap">
            <div className="d-flex align-items-center">
              {javascript && (
                <img
                  className="m-3 skill_icon"
                  src={javascript}
                  alt="javascript"
                />
              )}
              <p className="fs-6 btn btn-outline-secondary">javascript</p>
            </div>
            <div className="d-flex align-items-center">
              {react && (
                <img className="m-3 skill_icon" src={react} alt="react" />
              )}
              <p className="fs-6 btn btn-outline-secondary">Reactjs</p>
            </div>
            <div className="d-flex align-items-center">
              {sql && (
                <img className="m-3 skill_icon" src={sql} alt="postgres" />
              )}
              <p className="fs-6 btn btn-outline-secondary">Postgresql</p>
            </div>
            <div className="d-flex align-items-center">
              {ruby && <img className="m-3 skill_icon" src={ruby} alt="ruby" />}
              <p className="fs-6 btn btn-outline-secondary">Ruby</p>
            </div>
            <div className="d-flex align-items-center">
              {rails && (
                <img className="m-3 skill_icon" src={rails} alt="rails" />
              )}
              <p className="fs-6 btn btn-outline-secondary">Rails</p>
            </div>
            <div className="d-flex align-items-center">
              {html && <img className="m-3 skill_icon" src={html} alt="html" />}
              <p className="fs-6 btn btn-outline-secondary">HTML</p>
            </div>
            <div className="d-flex align-items-center">
              {cs && <img className="m-3 skill_icon" src={cs} alt="css" />}
              <p className="fs-6 btn btn-outline-secondary">CSS</p>
            </div>
            <div className="d-flex align-items-center">
              {heroku && (
                <img className="m-3 skill_icon" src={heroku} alt="heroku" />
              )}
              <p className="fs-6 btn btn-outline-secondary">Heroku</p>
            </div>
            <div className="d-flex align-items-center">
              {git && <img className="m-3 skill_icon" src={git} alt="github" />}
              <p className="fs-6 btn btn-outline-secondary">GitHub</p>
            </div>
            <div className="d-flex align-items-center">
              {sass && <img className="m-3 skill_icon" src={sass} alt="scss" />}
              <p className="fs-6 btn btn-outline-secondary">Sass</p>
            </div>
            <div className="d-flex align-items-center">
              {bootstrap && (
                <img
                  className="m-3 skill_icon"
                  src={bootstrap}
                  alt="bootstrap"
                />
              )}
              <p className="fs-6 btn btn-outline-secondary">Bootstrap</p>
            </div>
          </div>
          <div className="progress-contents">
            <div className="progress">
              <span className="progress-txt text-dark">Frontend: </span>
              <ProgressBar bgcolor="#fd7e14" progress="65" height={23} />
            </div>
            {/* <hr /> */}
            <div className="progress">
              <span className="progress-txt text-dark">Backend: </span>
              <ProgressBar bgcolor="#dc3545" progress="75" height={23} />
            </div>
            {/* <hr /> */}
            <div className="progress">
              <span className="progress-txt text-dark">Database: </span>
              <ProgressBar bgcolor="#198754" progress="70" height={23} />
            </div>
            {/* <hr /> */}
            <div className="progress">
              <span className="progress-txt text-dark">Design: </span>
              <ProgressBar bgcolor="#d63384" progress="85" height={23} />
            </div>
            {/* <hr /> */}
            <div className="progress">
              <span className="progress-txt text-dark">Product Management: </span>
              <ProgressBar bgcolor="#6f42c1" progress="80" height={23} />
            </div>
            {/* <hr /> */}
            <div className="progress">
              <span className="progress-txt text-dark">Infra: </span>
              <ProgressBar bgcolor="#0d6efd" progress="95" height={23} />
            </div>
          </div>
        </div>
        <div>
          {photo && (
            <img src={photo} alt="skill_photo" className="skills_img" />
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
