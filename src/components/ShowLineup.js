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

      <div className="listingcontainer" >
        <b id='onairtoday'>On Air Today <FiberManualRecordIcon className="blinking" /></b>
        {airingList.map((show, key) => (


          <div >

            {isClipsOpen ? <ShowClips show={show} handleShowClips={handleShowClips} /> : ''}

            <div className="showlisting" onClick={handleShowClips}>
              <div className="dailyshow">
                <p id='topdaily'>{show.type}.{show.airtime} hours ago</p>
                <p id='bottomdaily'> {show.value}</p>
                <p id='showchannel'>Channel: {show.channel}</p>
              </div>




            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ShowLineup;
