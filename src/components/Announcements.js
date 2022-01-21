import React from 'react';
import AnnouncementsData from '../dummy data/Announcementsdata';

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
