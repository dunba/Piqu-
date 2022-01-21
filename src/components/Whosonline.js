import React from 'react'
import Avatar from 'avataaars'
import cbsUsersList from '../dummy data/userlist'
import { Tooltip } from '@mui/material'
import { useState } from 'react'
import InfoIcon from '@mui/icons-material/Info';
const Whosonline = () => {
    const [isAviHovered, setIsAviHovered] = useState(false);
    const handleAviHover = () => {
        !isAviHovered ? setIsAviHovered(true) : setIsAviHovered(false)
    }
    let totalonlineusers = cbsUsersList.filter(user => user.online);
    let onlineusers = totalonlineusers.slice(0, 5)
    const infowarning = `This section is fake`

    return (
        < div className="onairsection" >
            <b>Who's Online?</b>
            <Tooltip title={infowarning}>
                <InfoIcon id='infoicon' />
            </Tooltip>

            <div className='avatarholders'>
                {onlineusers.map((users, key) => (

                    <div className='onlineholder'>

                        <Tooltip title={`${users.firstName} ${users.lastName}`} arrow>
                            <img onClick={handleAviHover} id='onlineavi' src={users.avi} />


                        </Tooltip>



                    </div>

                ))}
            </div>
            <br />
            <a href=''>{totalonlineusers.length - onlineusers.length} More</a>
        </div >
    )
}

export default Whosonline
