import { React, useEffect, useState } from "react";
import showList from '../dummy data/showList'
import db from '../firebase-config'
import { collection, getDocs } from '@firebase/firestore'
import { NavLink } from 'react-router-dom'

const Rundowns = () => {
    const showRef = collection(db, "showList");
    const [shows, setShows] = useState([])

    const fetchShowList = async () => {
        const data = await getDocs(showRef)
        setShows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    useEffect(() => {
        fetchShowList()
    }, [])
    return (
        <div className="flexcontainer">
            Rundowns
            {shows.map((show, key) => (
                <div key={show.showid}>
                    <ul>
                        <li>
                            <NavLink to={`/rundowns/${show.showID}`}>{show.value}</NavLink>
                        </li>
                    </ul>
                </div>
            ))
            }
        </div >
    )
}

export default Rundowns
