import { React, useEffect, useState } from "react";
import db from '../firebase-config'
import { collection, getDocs } from '@firebase/firestore'
import '../css/announcements.css'
import AddIcon from '@mui/icons-material/Add';
import IndividualAnnouncement from './IndividualAnnouncement';
import { Tooltip, StyledBadge, Badge, Popover } from '@mui/material';
import NewAnnouncement from "./NewAnnouncement";
import Loading from 'react-loading'
import { NavLink } from "react-router-dom";

const Teamannouncements = () => {

    const [newAnnouncement, setNewAnnouncement] = useState(false)
    const handleNewAnnouncement = () => {
        !newAnnouncement ? setNewAnnouncement(true) : setNewAnnouncement(false)
    }
    const [isLoading, setIsLoading] = useState(false)




    const announcementsRef = collection(db, "announcements");
    const [listofannouncements, setListofAnnouncements] = useState([])

    const fetchAnnouncements = async () => {
        setIsLoading(true)
        const data = await getDocs(announcementsRef)
        setListofAnnouncements(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setIsLoading(false)
    }



    useEffect(() => {
        fetchAnnouncements()

    }, [])

    const [isAnnouncementsExpanded, setIsAnnouncementsExpanded] = useState(false)
    const handleAnnouncementsExpansion = () => {
        if (!isAnnouncementsExpanded) {
            setIsAnnouncementsExpanded(true);
            setSliceCutoff(listofannouncements.length)
        } else {
            setIsAnnouncementsExpanded(false);
            setSliceCutoff(3)
        }
    }

    const [sliceCutoff, setSliceCutoff] = useState(3)
    const announcementsinorder = listofannouncements.sort((a, b) => b.time - a.time);

    const sortedAnnouncements = announcementsinorder.slice(0, sliceCutoff);
    return (
        <div className="onairsection">

            <b>Announcements</b>
            <br />

            <div className="listingcontainer" >
                {isLoading ? <div className="loadingholder"> <Loading width={'40px'} /> </div> : <div>
                    {
                        sortedAnnouncements.map(announcement => (
                            <IndividualAnnouncement key={announcement.id} announcement={announcement} />

                        ))


                    }</div>
                }

            </div>
            <div className='announcementsfooter'>

                <div>



                    <NavLink style={{ color: 'inherit' }} to='/announcements'><p id='annfootertext' > ALL ({listofannouncements.length})</p></NavLink>
                </div>
                <div >



                    <Tooltip title={'New announcement'}>
                        <p id='annfootertext' onClick={handleNewAnnouncement} >NEW</p>

                    </Tooltip>

                </div>
                {newAnnouncement ?
                    <NewAnnouncement handleNewAnnouncement={handleNewAnnouncement} /> : ''}
            </div>


        </div >
    )
}

export default Teamannouncements
