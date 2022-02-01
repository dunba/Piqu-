import { React, useEffect, useState } from "react";
import db from '../firebase-config'
import { collection, getDocs } from '@firebase/firestore'
import '../css/mainannouncements.css'
import IndividualAnnouncement from "./IndividualAnnouncement";
import AnnHolder from "./AnnyHolder";

const Announcements = () => {
    const announcementsRef = collection(db, "announcements");
    const [listofannouncements, setListofAnnouncements] = useState([])

    const fetchAnnouncements = async () => {
        const data = await getDocs(announcementsRef)
        setListofAnnouncements(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        console.log(listofannouncements)
    }
    useEffect(() => {
        fetchAnnouncements()
    }, [])
    return <div className="announcementcontainer">
        <div className="announcementholder">
            Announcements
            {listofannouncements.map(announcement => (


                <AnnHolder announcement={announcement} />


            ))}
        </div>
    </div>;
};

export default Announcements;
