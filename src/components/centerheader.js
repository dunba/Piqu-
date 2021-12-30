import React from "react";
import { useInRouterContext } from "react-router-dom";
import '../css/centerheader.css'
const CenterHeader = () => {
  const date = new Date();
  const today = date.toDateString();
  const user = {
    name: "Dunba Tehinse",
    displayName: "Dunba",
    avatar: "https://dummyimage.com/50x50/000000/fff",
    online: true,
  };
  return (
    <div id="centerheader">
      <div>
        <img src={user.avatar} />
      </div>

      <div>Good Morning {user.displayName}</div>
      <div>Today is {today}</div>

    </div>
  );
};

export default CenterHeader;
