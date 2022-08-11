import React from "react";
import { home } from "../components/shared/HomeData";
import * as GiIcon from "react-icons/gi";
import * as MdIcon from "react-icons/md";

const Home = () => {
  const { photo, greeting, sub_greeting, info } = home;

  return (
    <div className="container col col-sm-5 text-light d-flex align-items-center justify-content-between home_cont">
      <div className="row justify-content-evenly align-items-center mx-auto">
        <div className="col-4 text-center">
          {greeting && (
            <h1 className="m-0 font-big text-uppercase">{greeting}</h1>
          )}
          {sub_greeting && (
            <h1 className="m-0 font-big animate-charcter text-uppercase">
              {sub_greeting}
            </h1>
          )}
          {info && <p className="mt-2">{info}</p>}
        </div>
        <div style={size.divider}>
          <MdIcon.MdSafetyDivider />
        </div>
        <div className="w-50 col-4">
          {photo && <img className="img-fluid" src={photo} alt="..." />}
        </div>
        <span style={size.ring}>
          <GiIcon.GiCloudRing />
        </span>
        <span style={size.watering}>
          <GiIcon.GiMouthWatering />
        </span>
        <span style={size.planet}>
          <GiIcon.GiRingedPlanet />
        </span>
        <span style={size.linked}>
          <GiIcon.GiLinkedRings />
        </span>
        <span style={size.boxing}>
          <GiIcon.GiBoxingRing />
        </span>
        <span style={size.double}>
          <GiIcon.GiDoubleRingedOrb />
        </span>
        <span style={size.alarm}>
          <GiIcon.GiRingingAlarm />
        </span>
        <span style={size.trans}>
          <GiIcon.GiTransportationRings />
        </span>
        <span style={size.beam}>
          <GiIcon.GiRingedBeam />
        </span>
      </div>
    </div>
  );
};

const size = {
  ring: {
    fontSize: "50px",
    position: "fixed",
    top: "300px",
    left: "800px",
    opacity: "20%",
  },
  watering: {
    position: "fixed",
    top: "100px",
    left: "200px",
    fontSize: "50px",
    opacity: "40%",
  },
  planet: {
    fontSize: "50px",
    position: "fixed",
    top: "120px",
    left: "1117px",
    opacity: "20%",
  },
  boxing: {
    fontSize: "50px",
    position: "fixed",
    top: "460px",
    left: "489px",
    opacity: "20%",
  },
  beam: {
    fontSize: "50px",
    position: "fixed",
    top: "870px",
    left: "826px",
    opacity: "20%",
  },
  linked: {
    fontSize: "50px",
    position: "fixed",
    top: "978px",
    left: "340px",
    opacity: "20%",
  },
  double: {
    fontSize: "50px",
    position: "fixed",
    top: "781px",
    left: "1374px",
    opacity: "20%",
  },
  trans: {
    fontSize: "50px",
    position: "fixed",
    top: "980px",
    left: "1856px",
    opacity: "20%",
  },
  alarm: {
    fontSize: "50px",
    position: "fixed",
    top: "348px",
    left: "1743px",
    opacity: "20%",
  },
  divider: {
    fontSize: "50px",
    opacity: "50%",
    textAlign: "center",
  },
};

export default Home;
