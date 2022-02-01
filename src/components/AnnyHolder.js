import React from 'react';
import Announcementpopup from './Announcementpopup';
import { useState } from 'react';
import '../css/annyholder.css'
import { Modal } from '@mui/material';

const AnnHolder = ({ announcement }) => {
    const characterLimit = 35;
    const urgentemoji = '🆘'
    const cautionemoji = '⚠️'
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false)
    }


    return <div className='annylist' onClick={handleModal} >
        <div className='cardholder'>
            <div className='biggercard'>

                <div>
                    <img id='pfp' src={announcement.poster.avi} />
                </div>
                <div className='textpart'>
                    {announcement.head}
                    {/* {announcement.poster.name} */}
                    {/* {announcement.time.toDate().toDateString()} */}
                </div>

            </div >
            <div className='openmodal'>
                {isModalOpen && (<div handleModal={handleModal} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}  >
                    {announcement.body}
                </div>)}
            </div>
        </div>

    </div>;
};

export default AnnHolder;
