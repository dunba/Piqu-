import React from "react";
import showList from "../dummy data/showList";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useState } from "react";
import IndividualRundown from "./IndividualRundown";
import { Link } from "react-router-dom";
import IndividualAnnouncement from "./IndividualAnnouncement";

const ShowLineup = () => {
  let airingList = showList.filter(show => show.airingtoday)
  let sortedAiringlist = airingList.sort((a, b) => (b.starttime > a.starttime) ? 1 : -1);


  return (
    <div className="onairsection">

      <div className="listingcontainer" >
        <b id='onairtoday'>On Air Today <FiberManualRecordIcon className="blinking" /></b>
        {sortedAiringlist.map((show) => (
          <IndividualRundown show={show} />
        ))
        }
      </div>

    </div>
  );
};

export default ShowLineup;
