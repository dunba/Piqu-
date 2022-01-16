import React from "react";
import "../css/nav.css";
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import MailIcon from '@mui/icons-material/Mail';
import Mail from "@mui/icons-material/Mail";
import FeedIcon from '@mui/icons-material/Feed';
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="navholder">
      <nav>
        <ul>
          <li><NavLink activeStyle={{ color: 'rgb(216, 216, 255)', textDecoration: "none" }} style={{ color: 'white', textDecoration: 'none' }} to='/' exact><HomeIcon /></NavLink></li>
          <li><NavLink activeStyle={{ color: 'rgb(216, 216, 255)', textDecoration: "none" }} style={{ color: 'white', textDecoration: 'none' }} to='/rundowns' exact><FeedIcon /></NavLink></li>
          <li><NavLink activeStyle={{ color: 'rgb(216, 216, 255)', textDecoration: "none" }} style={{ color: 'white', textDecoration: 'none' }} to='/messages' exact><MailIcon /></NavLink></li>
        </ul>
      </nav>
    </div >
  );
};

export default Nav;
