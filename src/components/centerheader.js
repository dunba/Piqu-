import React from "react";
import { useInRouterContext } from "react-router-dom";
import Avatar from 'avataaars'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react";
import { Piece } from 'avataaars';
import cbsUsersList from "../dummy data/userlist";
import '../css/centerheader.css'



const RightSideHeader = () => {
  const [isPanelOpened, setIsPanelOpened] = useState(false)
  const currentuser = cbsUsersList.filter(user => user.loggedInUser)
  const handlePanel = () => {
    !isPanelOpened ? setIsPanelOpened(true) : setIsPanelOpened(false);
  }

  const date = new Date();
  const today = date.toDateString();
  return (

    < div className="userconsole" >

      <div>
        <img id='useravi' src={currentuser[0].avi} />

      </div>
      <div className="consolewelcome">
        <p>Hello, {currentuser[0].firstName} !</p>
        <p>Today is {today}</p>

      </div>






    </div >

  );
};

export default RightSideHeader;
