import React from "react";
import "../css/nav.css";
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import MailIcon from '@mui/icons-material/Mail';
import Mail from "@mui/icons-material/Mail";
import FeedIcon from '@mui/icons-material/Feed';
const Nav = () => {
  return (
    <div className="navholder">
      <nav>
        <ul>
          <li><HomeIcon /></li>
          <li><FeedIcon /></li>
          <li><MailIcon /></li>
          <li><GroupIcon /></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
