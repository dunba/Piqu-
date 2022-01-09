import React from "react";
import RightSideHeader from "./centerheader";
import ShowLineup from "./ShowLineup";
import "../css/right.css";
import RightNav from "./RightNav";

const RightConsole = () => {
  return (
    <div className="rightconsole">
      <div>
        <ShowLineup />
      </div>

      <div className="navbottom">
        <RightSideHeader />
      </div>
    </div>
  );
};

export default RightConsole;
