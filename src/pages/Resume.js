import React from "react";
import {
  resume,
  social_links,
  education,
} from "../components/data/ResumeData";
import Experience from "../components/shared/Experience";
import ResumeList from "../components/shared/ResumeList";
import * as GiBullet from "react-icons/gi";
import uniqid from "uniqid";

const Resume = () => {
  const { title, school, field_of_study, list_2, date_3 } = education;

  const {
    name,
    job_title,
    summary_title,
    summary,
    skills_title,
    experience_title,
    highlight,
    job_field,
    type,
    date,
    microverse,
    job_experience,
    type_2,
    date_2,
    list,
  } = resume;

  const { github, email, linkedin, twitter, angelList } = social_links;

  const color = {
    backgroundColor: "whitesmoke",

    resume_header: {
      backgroundColor: "#dc3545",
      color: "#fff",
      borderRadius: "5px",
      alignItems: "center",
      padding: "2px",
    },
    font: {
      fontSize: "16px",
    },
    icon: {
      color: "#2f4c64",
    },
  };

  return (
    <section className="mx-auto container resume_cont shadow">
      <div className="col p-2">
        <div className="p-4">
          <div className="row">
            <div className="d-flex justify-content-between">
              {name && (
                <h2
                  className="ls-2 fw-bolder text-uppercase"
                  
                >
                  {name}
                </h2>
              )}
              <div>
                {job_title && (
                  <h3
                    className="fw-bolder text-uppercase fs-5"
                    
                  >
                    {job_title}
                  </h3>
                )}
                <div className="d-flex flex-wrap justify-content-between fw-bolder">
                  {github && <a href={github}>Github</a>}

                  {email && <a href={email}>Email</a>}

                  {linkedin && <a href={linkedin}>linkedin</a>}

                  {twitter && <a href={twitter}>Twitter</a>}

                  {angelList && <a href={angelList}>AngelList</a>}
                </div>
              </div>
            </div>
            <div
              style={color.resume_header}
              className="text-capitalized text-center hdr mt-4"
            >
              {summary_title && <h5>{summary_title}</h5>}
            </div>
            {summary && (
              <p className=" text-center mt-3" style={color.font}>
                {summary}
              </p>
            )}
          </div>
          <div
            style={color.resume_header}
            className="text-capitalized text-center hdr mt-4"
          >
            {skills_title && <h5>{skills_title}</h5>}
          </div>
          <div>
            <ResumeList />
          </div>
          <div
            className="text-capitalized text-center hdr mt-2"
            style={color.resume_header}
          >
            {experience_title && <h5>{experience_title}</h5>}
          </div>
          <div>
            <div className="mt-3 d-flex justify-content-between">
              <div>
                {highlight && <h6 className="text-uppercase">{highlight}</h6>}
                {job_field && <p className="fw-bolder">{job_field}</p>}
              </div>
              <div>
                {type && <p>{type}</p>}
                {date && <p>{date}</p>}
              </div>
            </div>
            <Experience />
            <div>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  {microverse && (
                    <h6 className="text-uppercase ">{microverse}</h6>
                  )}
                  {job_experience && (
                    <p className="fw-bolder">Mentor</p>
                  )}
                </div>
                <div className="">
                  {type_2 && <p>{type_2}</p>}
                  {date_2 && <p>{date_2}</p>}
                </div>
              </div>
              <div className="">
                {list.map((li) => (
                  <p className="" key={uniqid()}>
                    <GiBullet.GiBulletBill style={color.icon} /> {li}
                  </p>
                ))}
              </div>
              {/* Education Field */}
              <div
                className="text-uppercase text-center fw-bolder mt-4"
                style={color.resume_header}
              >
                {title && <h5>{title}</h5>}
              </div>
              <div className=" d-flex justify-content-between align-items-center">
                <div className="mt-3">
                  {school && <h6 className="text-uppercase">{school}</h6>}
                  {field_of_study && (
                    <p className="fw-bolder">{field_of_study}</p>
                  )}
                </div>
                <div>{date_3 && <p>{date_3}</p>}</div>
              </div>
              <div className="">
                {list_2.map((li_2) => (
                  <p key={uniqid()}>
                    <GiBullet.GiBulletBill style={color.icon} /> {li_2}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
