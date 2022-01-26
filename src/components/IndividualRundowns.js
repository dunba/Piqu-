import React from 'react'
import '../css/individualrundown.css'
import showList from '../dummy data/showList'
import { useState, useEffect } from 'react'
import { Table } from '@mui/material'

const IndividualRundowns = ({ match }) => {
    const [show, setShow] = useState(null);
    const filteredshow = showList.filter(show => show.showid == match.params.id);
    const mainShow = filteredshow[0]
    console.log(mainShow)
    return (

        <div className="rundowncontainer">
            {mainShow.label}

            <table id='rundowntable'>

                <thead>

                    <tr>
                        <th>Story</th>
                        <th>Restrictions</th>
                        <th>MPX Categories</th>
                        <th>Notes</th>
                        <th>Hed</th>
                        <th>Short Hed</th>
                        <th>Dek</th>
                        <th>Airtime</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                {mainShow.clips.map(show => (
                    <tbody>
                        <tr>
                            <td>
                                {show.story ? show.story : ''}
                            </td>
                            <td>
                                {show.restrictions ? show.restrictions : ''}
                            </td>
                            <td>
                                {show.categories ? show.categories : ''}
                            </td>
                            <td>
                                {show.notes ? show.notes : ''}
                            </td>
                            <td>
                                {show.hed ? show.hed : ''}
                            </td>

                            <td>
                                {show.shorthed ? show.shorthed : ''}
                            </td>

                            <td>
                                {show.dek ? show.dek : ''}

                            </td>

                            <td>
                                {show.airtime ? show.airtime : ''}
                            </td>
                            <td>
                                {show.tags ? show.tags : ''}
                            </td>

                        </tr>
                    </tbody>
                ))}

            </table>


        </div>
    )
}

export default IndividualRundowns
