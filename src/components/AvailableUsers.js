import React from 'react';
import { Tooltip, Popover, Typography } from '@mui/material'
import { useState, useRef } from 'react'

const AvailableUsers = ({ users }) => {
    const [isAviClicked, setIsAviClicked] = useState(false);
    const handleAviClick = () => {
        !isAviClicked ? setIsAviClicked(true) : setIsAviClicked(true)
    }



    return (
        <div className='onlineholder'>
            <Tooltip title={`${users.firstName} ${users.lastName}`} arrow>
                <img onClick={handleAviClick} id='onlineavi' src={users.avi} />
            </Tooltip>



        </div>
    )
};

export default AvailableUsers;
