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

    return (
        < div className="onairsection" >
            <b>Who's Online?</b>
            <div className='avatarholders'>
                {cbsUsersList.map((users, key) => (

                    <div className='onlineholder'>
                        <div>
                            <Tooltip title={users.name}>
                                <img onClick={handleAviHover} id='onlineavi' src={users.avi} />


                            </Tooltip>

                        </div>


                    </div>

                ))}
            </div>
            <a href=''>13 More</a>
        </div >
    )
}

export default Whosonline
