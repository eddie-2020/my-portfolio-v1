import React from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { BsLaptop } from "react-icons/bs";
import * as CgBorder from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { project } from "../components/data/ProjectData";

const color = {
  bs_1: {
    fontSize: "30px",
    color: "#dc3545",
  },
};
const Projects = () => {
  const {
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_6,
    project_content,
  } = project;

  return (
    <section className="m-auto container mb-4 d-flex justify-content-evenly align-items-center">
      <div className="col p-3">
        <div className="p-3">
          <div className="row">
            <div className="text-center">
              <h1 className="fw-bold animate_"> Technical Projects </h1>
            </div>
            <div className="text-center">
              <CgBorder.CgBorderStyleSolid style={color.bs_1} />
            </div>
          </div>
          <div className="row container mx-auto align-items-center">
            <div className="col-md-4 card p-3 shadow-lg bg-dark text-light rounded text-center my-2 card_marging">
              <div
                id="carouselExampleControls1"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={image_1.img_1}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={image_1.img_2}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={image_1.img_3}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls1"
                  data-bs-slide="prev"
                >
                  <GrPrevious className="" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls1"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {project_content && (
                <h4 className="ff-jose my-1">{project_content.todo.name}</h4>
              )}
              {project_content && (
                <p className="mt-2">{project_content.todo.desc}</p>
              )}
              <div className="d-flex flex-wrap container justify-content-evenly">
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.todo.lang_used.react}
                  </p>
                )}
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.todo.lang_used.webpack}
                  </p>
                )}
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.todo.lang_used.css}
                  </p>
                )}
              </div>
              <div className="row d-flex justify-content-center m-3">
                <a
                  href={project_content.todo.live_demo}
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-2 bg-danger rounded"
                  target="/blank"
                >
                  <BsLaptop style={{ fontSize: "25px" }} /> View Live
                </a>
                <a
                  href={project_content.todo.source_code}
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-2 bg-blue rounded"
                  target="/blank"
                >
                  <AiFillGithub style={{ fontSize: "25px" }} /> View Source Code
                </a>
              </div>
            </div>
            <div className="col-md-4 card p-3 shadow-lg bg-dark text-light rounded text-center my-2">
              <div
                id="carouselExampleControls2"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={image_2.img_4}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={image_2.img_5}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls2"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls2"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div>
                {project_content && (
                  <h4 className="ff-jose my-1">
                    {project_content.task_tracker.name}
                  </h4>
                )}
                {project_content && (
                  <p className="mt-2">{project_content.task_tracker.desc}</p>
                )}
                <div className="d-flex justify-content-evenly">
                  {project_content && (
                    <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                      {project_content.task_tracker.lang_used.react}
                    </p>
                  )}
                  {project_content && (
                    <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                      {project_content.task_tracker.lang_used.webpack}
                    </p>
                  )}
                  {project_content && (
                    <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                      {project_content.task_tracker.lang_used.css}
                    </p>
                  )}
                  {project_content && (
                    <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                      {project_content.task_tracker.lang_used.json}
                    </p>
                  )}
                </div>
                <div className="row d-flex justify-content-center m-3">
                  <a
                    href={project_content.task_tracker.source_code}
                    className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-2 bg-blue rounded"
                    target="/blank"
                  >
                    <AiFillGithub style={{ fontSize: "25px" }} /> View Source
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 card p-3 shadow-lg bg-dark text-light rounded text-center my-2 card_marging">
              <div
                id="carouselExampleControls3"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={image_3.img_6}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={image_3.img_7}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={image_3.img_8}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls3"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls3"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {project_content && (
                <h4 className="ff-jose my-1">
                  {project_content.budget_app.name}
                </h4>
              )}
              {project_content && (
                <p className="mt-2">{project_content.budget_app.desc}</p>
              )}
              <div className="d-flex justify-content-evenly">
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.budget_app.lang_used.rails}
                  </p>
                )}
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.budget_app.lang_used.postgres}
                  </p>
                )}
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.budget_app.lang_used.bootstrap}
                  </p>
                )}
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.budget_app.lang_used.js}
                  </p>
                )}
              </div>
              <div className="row d-flex justify-content-center m-3">
                <a
                  href={project_content.budget_app.live_demo}
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-2 bg-danger rounded"
                  target="/blank"
                >
                  <BsLaptop style={{ fontSize: "25px" }} /> View Live
                </a>
                <a
                  href={project_content.budget_app.source_code}
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-2 bg-blue rounded"
                  target="/blank"
                >
                  <AiFillGithub style={{ fontSize: "25px" }} /> View Source Code
                </a>
              </div>
            </div>
            <div className="col-md-4 card p-3 shadow-lg bg-dark text-light rounded text-center my-2">
              <div
                id="carouselExampleControls4"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={image_4.img_9}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={image_4.img_10}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={image_4.img_11}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls4"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls4"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {project_content && (
                <h4 className="ff-jose my-1">
                  {project_content.bcycom_app.name}
                </h4>
              )}
              {project_content && (
                <p className="mt-2">{project_content.bcycom_app.desc}</p>
              )}
              <div className="d-flex justify-content-evenly">
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.bcycom_app.lang_used.react}
                  </p>
                )}
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.bcycom_app.lang_used.webpack}
                  </p>
                )}
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.bcycom_app.lang_used.rails}
                  </p>
                )}
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.bcycom_app.lang_used.jwt}
                  </p>
                )}
              </div>
              <div className="row d-flex justify-content-center m-3">
                <a
                  href={project_content.bcycom_app.live_demo}
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-2 bg-danger rounded"
                  target="/blank"
                >
                  <BsLaptop style={{ fontSize: "25px" }} /> View Live
                </a>
                <a
                  href={project_content.bcycom_app.api_source_code}
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-2 bg-blue rounded"
                  target="/blank"
                >
                  <AiFillGithub style={{ fontSize: "25px" }} /> View Backend
                  Source Code
                </a>
                <a
                  href={project_content.bcycom_app.ui_source_code}
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-2 bg-blue rounded"
                  target="/blank"
                >
                  <AiFillGithub style={{ fontSize: "25px" }} /> View Frontend
                  Source Code
                </a>
              </div>
            </div>
            <div className="col-md-4 card p-3 shadow-lg bg-dark text-light rounded text-center my-2 card_marging">
              <div
                id="carouselExampleControls5"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={image_5.img_12}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={image_5.img_13}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls5"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls5"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {project_content && (
                <h4 className="ff-jose my-1">
                  {project_content.metrics_app.name}
                </h4>
              )}
              {project_content && (
                <p className="mt-2">{project_content.metrics_app.desc}</p>
              )}
              <div className="d-flex justify-content-evenly">
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.metrics_app.lang_used.react}
                  </p>
                )}
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.metrics_app.lang_used.webpack}
                  </p>
                )}
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.metrics_app.lang_used.css}
                  </p>
                )}
              </div>
              <div className="row d-flex justify-content-center m-3">
                <a
                  href={project_content.metrics_app.live_demo}
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-2 bg-danger rounded"
                  target="/blank"
                >
                  <BsLaptop style={{ fontSize: "25px" }} /> View Live
                </a>
                <a
                  href={project_content.metrics_app.source_code}
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-2 bg-blue rounded"
                  target="/blank"
                >
                  <AiFillGithub style={{ fontSize: "25px" }} /> View Source Code
                </a>
              </div>
            </div>
            <div className="col-md-4 card-blocker card p-3 shadow-lg bg-dark text-light rounded text-center my-2">
              <div
                id="carouselExampleControls6"
                className="carousel slide my-1"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={image_6.img_14}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={image_6.img_15}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={image_6.img_16}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={image_6.img_17}
                      className="d-block w-100 img"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls6"
                  data-bs-slide="prev"
                >
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls6"
                  data-bs-slide="next"
                >
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {project_content && (
                <h4 className="ff-jose my-1">
                  {project_content.space_travellers_app.name}
                </h4>
              )}
              {project_content && (
                <p className="mt-2">
                  {project_content.space_travellers_app.desc}
                </p>
              )}
              <div className="d-flex justify-content-evenly">
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.space_travellers_app.lang_used.react}
                  </p>
                )}
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.space_travellers_app.lang_used.webpack}
                  </p>
                )}
                {project_content && (
                  <p className="border border-3 p-1 fw-bolder text-danger animate_tools align-items-center border-secondary">
                    {project_content.space_travellers_app.lang_used.bootstrap}
                  </p>
                )}
              </div>
              <div className="row d-flex justify-content-center m-3">
                <a
                  href="https://weather-yg.herokuapp.com/"
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-2 bg-danger rounded"
                  target="/blank"
                >
                  <BsLaptop style={{ fontSize: "25px" }} /> View Live
                </a>
                <a
                  href="https://github.com/Yagnik-Gohil/Weather"
                  className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-2 bg-blue rounded"
                  target="/blank"
                >
                  <AiFillGithub style={{ fontSize: "25px" }} /> View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
