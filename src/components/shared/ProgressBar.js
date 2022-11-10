import React from "react";

const ProgressBar = ({bgcolor, progress, height}) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "#6c757d34",
    borderRadius: 40,
    margin: 25,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    fontSize: "0.8rem",
    color: "#ffffff",
    fontWeight: 900,
  };
  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
