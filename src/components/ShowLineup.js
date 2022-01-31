import { React, useEffect } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useState } from "react";
import IndividualRundown from "./IndividualRundown";
import { Link } from "react-router-dom";
import IndividualAnnouncement from "./IndividualAnnouncement";
import db from '../firebase-config'
import { collection, getDocs } from '@firebase/firestore'


const ShowLineup = () => {
  const showRef = collection(db, "showList");
  const [shows, setShows] = useState([])

  const fetchShowList = async () => {
    const data = await getDocs(showRef)
    setShows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
  useEffect(() => {
    fetchShowList()
  }, [])
  let airingList = shows.filter(show => show.airingtoday)
  let sortedAiringlist = airingList.sort((a, b) => (b.starttime > a.starttime) ? 1 : -1);


  return (
    <div className="onairsection">

      <div className="listingcontainer" >
        <b id='onairtoday'>On Air Today <FiberManualRecordIcon className="blinking" /></b>
        {sortedAiringlist.map((show) => (
          <IndividualRundown key={show.showID} show={show} />
        ))
        }
      </div>

    </div>
  );
};

export default ShowLineup;
