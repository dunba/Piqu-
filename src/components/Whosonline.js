import React from 'react'
import Avatar from 'avataaars'
import cbsUsersList from '../dummy data/userlist'
import { Tooltip } from '@mui/material'
import { useState } from 'react'
import InfoIcon from '@mui/icons-material/Info';
import { Popover, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import AvailableUsers from './AvailableUsers'
const Whosonline = () => {
    const [isAviHovered, setIsAviHovered] = useState(false);
    const handleAviHover = () => {
        !isAviHovered ? setIsAviHovered(true) : setIsAviHovered(false)
    }
    const [isSectionExpanded, setIsSectionExpanded] = useState(false)
    const handleSectionExpansion = () => {
        !isSectionExpanded ? setIsSectionExpanded(true) : setIsSectionExpanded(false);
    }


    let totalonlineusers = cbsUsersList.filter(user => user.online);
    let onlineusers = totalonlineusers.slice(0, 5)
    const infowarning = `This section is fake`

    return (
        < div className="onairsection" >
            <b>Who's Online?</b>


            <div className='avatarholders'>
                {onlineusers.map((users, key) => (

                    <AvailableUsers users={users} />

                ))}
            </div>

            <p onClick={handleSectionExpansion} id='expandsection'>{totalonlineusers.length - onlineusers.length} More</p>
        </div >
    )
}

export default Whosonline
