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

const Teamannouncements = () => {



    const sortedAnnouncements = AnnouncementsData.slice(0, 3);
    return (
        <div className="onairsection">

            <b>Announcements</b>
            <div className="listingcontainer" >
                {
                    sortedAnnouncements.map(announcement => (
                        <IndividualAnnouncement announcement={announcement} />

                    ))


                }


            </div>

            <Link to='/announcements'>{AnnouncementsData.length - sortedAnnouncements.length} more announcements...</Link> <AddIcon />

        </div >
    )
}

export default Teamannouncements
