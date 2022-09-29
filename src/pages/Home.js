import React from "react";
import { home } from "../components/shared/HomeData";
import * as CgBorder from "react-icons/cg";
import Social from "./Social";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  const { photo, sub_greeting, info_1, info_2, info_3 } = home;

  const info = [info_1, info_2, info_3];

  const hash_tags = [
    "#Code",
    "#Experience",
    "#Communication",
    "#Problem Solving",
  ];

  const border = {
    bs_1: {
      fontSize: "30px",
      color: "#dc3545",
    },
  };

  return (
    <div className="container text-center home_cont d-flex justify-content-evenly align-items-center">
      <div className="">
        <div className="">
          <div className="">
            {photo && <img className="img-fluid" src={photo} alt="..." />}
          </div>
          <div>
            {sub_greeting && (
              <h1 className="mt-5 font-big animate-character text-uppercase">
                {sub_greeting}
              </h1>
            )}
          </div>
          <div className="text-center">
            <CgBorder.CgBorderStyleSolid style={border.bs_1} />
          </div>
          <TypeWriterEffect
            textStyle={{
              textAlign: "center",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "1.3em",
              backgroundImage: `linear-gradient(-225deg, #ffffff, #ff7300, rgb(78, 194, 233), rgb(207, 58, 58), #ffffff)`,
              backgroundSize: "200% auto",
              color: "#fff",
              backgroundClip: "text",
              webkitBackgroundClip: "text",
              webkitTextFillColor: `transparent`,
              animation: `textclip 2s linear infinite`,
            }}
            startDelay={1000}
            cursorColor="#3F3D56"
            multiText={[...info]}
            loop={true}
            nextTextDelay={1000}
            typeSpeed={100}
          />
        </div>
        <div className="type_border">
        <TypeWriterEffect
          textStyle={{
            textAlign: "center",
            fontWeight: 700,
            textTransform: "capitalize",
            fontSize: "1.2em",
            backgroundImage: `linear-gradient(-225deg, #ffffff, #ff7300, rgb(78, 194, 233), #ffffff)`,
            backgroundSize: "200% auto",
            color: "#fff",
            backgroundClip: "text",
            webkitBackgroundClip: "text",
            webkitTextFillColor: `transparent`,
            animation: `textclip 2s linear infinite`,
          }}
          startDelay={1000}
          cursorColor="#3F3D56"
          multiText={[...hash_tags]}
          loop={true}
          nextTextDelay={1000}
          typeSpeed={50}
        />
      </div>
      </div>
      <div className="">
        <Social />
      </div>
    </div>
  );
};

export default Home;
