import React from "react";
import RightSideHeader from "./centerheader";
import ShowLineup from "./ShowLineup";
import "../css/right.css";
import RightNav from "./RightNav";
import Whosonline from "./Whosonline";
import ArchivedRequests from "./ArchivedRequests";
import Teamannouncements from "./Teamannouncements";

const RightConsole = () => {
  return (
    <div className="rightconsole">
      <Teamannouncements />
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
