import React from "react";
import showList from "./showList";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ShowClips from "./ShowClips";
import { useState } from "react";

const ShowLineup = () => {
  const [isClipsOpen, setIsClipsOpen] = useState(false)
  let airingList = showList.filter(show => show.airingtoday).sort();
  const handleShowClips = () => {
    !isClipsOpen ? setIsClipsOpen(true) : setIsClipsOpen(false);
  }
  return (
    <div className="onairsection">
      <b>On Air Today</b><FiberManualRecordIcon className="blinking" />
      <div className="listingcontainer" >
        {airingList.map((show, key) => (

          <div >
            {isClipsOpen ? <ShowClips show={show} handleShowClips={handleShowClips} /> : ''}

            <div className="showlisting" onClick={handleShowClips}>
              <div>{show.type}.{show.airtime} hours ago</div>
              <div> <h5 > {show.value}</h5></div>



            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ShowLineup;
