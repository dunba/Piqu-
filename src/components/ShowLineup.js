import React from "react";
import showList from "./showList";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const ShowLineup = () => {
  let airingList = showList.filter(show => show.airingtoday).sort();
  return (
    <div>
      <b>On Air Today</b><FiberManualRecordIcon className="blinking" />
      <div className="listingcontainer">
        {airingList.map((show, key) => (
          <div className="showlisting">
            <h5>{show.value}</h5>
            {show.complete ? <CheckCircleIcon /> : <CancelIcon />}
            <p>{show.airtime}pm</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowLineup;
