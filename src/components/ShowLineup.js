import React from "react";
import showList from "../dummy data/showList";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ShowClips from "./ShowClips";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShowLineup = () => {
  const [isClipsOpen, setIsClipsOpen] = useState(false)
  let airingList = showList.filter(show => show.airingtoday)
  let sortedAiringlist = airingList.sort((a, b) => (b.starttime > a.starttime));

  const handleShowClips = () => {
    !isClipsOpen ? setIsClipsOpen(true) : setIsClipsOpen(false);
  }
  return (
    <div className="onairsection">

      <div className="listingcontainer" >
        <b id='onairtoday'>On Air Today <FiberManualRecordIcon className="blinking" /></b>
        {sortedAiringlist.map((show, key) => (
          <div >
            {isClipsOpen ? <ShowClips show={show} handleShowClips={handleShowClips} /> : ''}
            <div className="showlisting" onClick={handleShowClips}>
              {/* <Link style={{ color: 'inherit', textDecoration: "none" }} to={`/rundowns/${show.showid}`}> */}
              <div className="dailyshow">
                <p id='topdaily'>{show.type} · {show.starttime > 12 ? `${show.starttime - 12}pm` : `${show.starttime}am`}</p>
                <p id='bottomdaily'> {show.value}</p>
                <p id='showchannel'>Channel: {show.channel}</p>
              </div>
              {/* </Link> */}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ShowLineup;
