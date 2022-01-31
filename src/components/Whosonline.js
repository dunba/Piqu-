import { React, useEffect, useState } from "react";
import db from '../firebase-config'
import { collection, getDocs } from '@firebase/firestore'
import Avatar from 'avataaars'
import cbsUsersList from '../dummy data/userlist'
import { Tooltip } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import { Popover, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import AvailableUsers from './AvailableUsers'
const Whosonline = () => {

    const usersRef = collection(db, "userList");
    const [userCollection, setUserCollection] = useState([])

    const fetchUserList = async () => {
        const data = await getDocs(usersRef)
        setUserCollection(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    useEffect(() => {
        fetchUserList()
    }, [])
    const [isAviHovered, setIsAviHovered] = useState(false);
    const handleAviHover = () => {
        !isAviHovered ? setIsAviHovered(true) : setIsAviHovered(false)
    }
    const [isSectionExpanded, setIsSectionExpanded] = useState(false)
    const handleSectionExpansion = () => {
        !isSectionExpanded ? setIsSectionExpanded(true) : setIsSectionExpanded(false);
    }


    let totalonlineusers = userCollection.filter(user => user.online && !user.loggedInUser);
    let onlineusers = totalonlineusers.slice(0, 5)
    const infowarning = `This section is fake`

    return (
        < div className="onairsection" >
            <b>Who's Online?</b>


            <div className='avatarholders'>
                {onlineusers.map((users, key) => (

                    <AvailableUsers key={users.userID2} users={users} />

                ))}
            </div>

            <p onClick={handleSectionExpansion} id='expandsection'>{totalonlineusers.length - onlineusers.length} More</p>
        </div >
    )
}

export default Whosonline
