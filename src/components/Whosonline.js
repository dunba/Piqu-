import React from 'react'
import Avatar from 'avataaars'
import cbsUsersList from './users/userlist'
import { Tooltip } from '@mui/material'
import { useState } from 'react'
const Whosonline = () => {
    const [isAviHovered, setIsAviHovered] = useState(false);
    const handleAviHover = () => {
        !isAviHovered ? setIsAviHovered(true) : setIsAviHovered(false)
    }
    let onlineusers = cbsUsersList.filter(user => user.online);

    return (
        < div className="onairsection" >
            <b>Who's Online?</b>
            <div className='avatarholders'>
                {onlineusers.map((users, key) => (

                    <div className='onlineholder'>

                        <Tooltip title={users.name} arrow>
                            <img onClick={handleAviHover} id='onlineavi' src={users.avi} />


                        </Tooltip>



                    </div>

                ))}
            </div>
            <br />
            <a href=''>13 More</a>
        </div >
    )
}

export default Whosonline
