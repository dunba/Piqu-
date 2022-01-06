import React from "react";
import showList from "./showList";

const ShowLineup = () => {
  return (
    <div>
      <b>Shows Airing Today</b>
      <div>
        {showList.map((show, key) => (
          <div>{show.value}</div>
        ))}
      </div>
    </div>
  );
};

export default ShowLineup;
