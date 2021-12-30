import React from "react";
import "../css/nav.css";
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><HomeIcon /></li>
          <li><AccessTimeIcon /></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
