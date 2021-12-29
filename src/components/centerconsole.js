import React from "react";
import CenterHeader from "./centerheader";
import CenterBody from "./CenterBody";
import "../css/centerconsole.css";

const CenterConsole = () => {
  return (
    <div className="centerconsole">
      CENTER CONSOLE
      <CenterHeader />
      <hr />
      <CenterBody />
    </div>
  );
};

export default CenterConsole;
