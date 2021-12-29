import React from "react";
import CenterConsole from "../components/centerconsole";
import Calendar from "../components/calendar ";
import RightConsole from "../components/rightconsole";
import "../css/home.css";

const Home = () => {
  return (
    <div className="flexcontainer">
      <section id="lefthalf">
        <Calendar />
      </section>
      <section id="centerconsole">
        <CenterConsole />
      </section>
      <section id="righthalf">
        <RightConsole />
      </section>
    </div>
  );
};

export default Home;
