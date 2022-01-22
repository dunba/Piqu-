import React from 'react'
import PushPinIcon from '@mui/icons-material/PushPin';
import AnnouncementsData from '../dummy data/Announcementsdata';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Link } from 'react-router-dom';
import '../css/announcements.css'
import AddIcon from '@mui/icons-material/Add';
import Modal from 'react-modal'
import { useState } from 'react';
import Announcementpopup from './Announcementpopup';
import IndividualAnnouncement from './IndividualAnnouncement';
import { Tooltip } from '@mui/material';

const Teamannouncements = () => {

    const [isAnnouncementsExpanded, setIsAnnouncementsExpanded] = useState(false)
    const handleAnnouncementsExpansion = () => {
        if (!isAnnouncementsExpanded) {
            setIsAnnouncementsExpanded(true);
            setSliceCutoff(AnnouncementsData.length)
        } else {
            setIsAnnouncementsExpanded(false);
            setSliceCutoff(3)
        }
    }

    const [sliceCutoff, setSliceCutoff] = useState(3)

    const sortedAnnouncements = AnnouncementsData.slice(0, sliceCutoff);
    return (
        <div className="onairsection">

            <b>Announcements</b>
            <br />

            <div className="listingcontainer" >
                {
                    sortedAnnouncements.map(announcement => (
                        <IndividualAnnouncement announcement={announcement} />

                    ))


                }


            </div>
            <div className='announcementsfooter'>

                <div>{!isAnnouncementsExpanded ?
                    <p onClick={handleAnnouncementsExpansion}> See More...({AnnouncementsData.length - sortedAnnouncements.length})</p>
                    : <p onClick={handleAnnouncementsExpansion}>See Less</p>}
                </div>
                <div className='addannouncement'>
                    <Tooltip title={'New announcement'}>
                        <AddIcon />
                    </Tooltip>
                </div>
            </div>


        </div >
    )
}

export default Teamannouncements
