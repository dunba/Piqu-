import { React, useEffect, useState } from "react";
import showList from '../dummy data/showList'
import db from '../firebase-config'
import { collection, getDocs } from '@firebase/firestore'
import '../css/individualrundown.css'
import { Table } from '@mui/material'

const IndividualRundowns = ({ match }) => {
    const showRef = collection(db, "showList");
    const [shows, setShows] = useState([])

    const fetchShowList = async () => {
        const data = await getDocs(showRef)
        setShows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        console.log(shows)
    }
    useEffect(() => {
        fetchShowList()
    }, [])
    const filteredshow = shows.filter(show => show.showid == match.params.id);
    const mainShow = filteredshow[0]
    console.log(mainShow)
    return (

        <div className="rundowncontainer">

            {mainShow ? mainShow.label : ''}

        </div >
    )
}

export default IndividualRundowns
