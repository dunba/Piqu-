import React from "react";
import RightSideHeader from "./centerheader";
import ShowLineup from "./ShowLineup";
import "../css/right.css";
import RightNav from "./RightNav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const RightConsole = () => {
  return (
    <div className="rightconsole">
      <div>
        <RightSideHeader />
      </div>

      <div>
        <ShowLineup />
      </div>

      <div className="navbottom">
        <RightNav />
      </div>
    </div>
  );
};

export default RightConsole;
