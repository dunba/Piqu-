import React from 'react';
import Announcementpopup from './Announcementpopup';
import { useState } from 'react';

const IndividualAnnouncement = ({ announcement }) => {
    const characterLimit = 35;
    const urgentemoji = '🆘'
    const cautionemoji = '⚠️'
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false)
    }


    return <div className='announcementslist' onClick={handleModal} >
        {
            announcement.head.length >= characterLimit ? <p id='announcementtext'>{announcement.head.substring(0, characterLimit)}...</p>
                : <p id='announcementtext'>{announcement.head}</p>
        }

        {isModalOpen ? <Announcementpopup handleModal={handleModal} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} announcement={announcement} /> : ''}
    </div >;
};

export default IndividualAnnouncement;
