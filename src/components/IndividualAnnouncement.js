import React from 'react';
import Announcementpopup from './Announcementpopup';
import { useState } from 'react';

const IndividualAnnouncement = ({ announcement }) => {
    const characterLimit = 25;
    const urgentemoji = '🆘'
    const cautionemoji = '⚠️'
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModal = () => {
        !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false)
    }


    return <div className='announcementslist' onClick={handleModal} >
        {
            announcement.head.length >= characterLimit ? <p>{announcement.head.substring(0, characterLimit)}...</p>
                : announcement.head
        }

        {isModalOpen ? <Announcementpopup handleModal={handleModal} announcement={announcement} /> : ''}
    </div >;
};

export default IndividualAnnouncement;