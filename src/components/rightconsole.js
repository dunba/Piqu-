import React from "react";
import RightSideHeader from "./centerheader";
import ShowLineup from "./ShowLineup";
import "../css/right.css";
import RightNav from "./RightNav";
import Whosonline from "./Whosonline";
import ArchivedRequests from "./ArchivedRequests";

const RightConsole = () => {
  return (
    <div className="rightconsole">

      <ShowLineup />

      <ArchivedRequests />
      <Whosonline />


      <div className="navbottom">
        <RightSideHeader />
      </div>
    </div>
  );
};

export default RightConsole;
