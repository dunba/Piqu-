import React from 'react';
import AnnouncementsData from '../dummy data/Announcementsdata';
import '../css/mainannouncements.css'

const Announcements = () => {
    let listofannouncements = AnnouncementsData
    return <div className="flexcontainer">
        Announcements
        {listofannouncements.map(announcement => (
            <div>
                {announcement.head}
            </div>
        ))}

    </div>;
};

export default Announcements;
