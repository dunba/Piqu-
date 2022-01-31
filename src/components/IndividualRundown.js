import React from 'react';
import ShowClips from './ShowClips';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const IndividualRundown = ({ show }) => {



    return (
        <div >
            <div className="showlisting" >
                <Link style={{ color: 'inherit', textDecoration: "none" }} to={`/rundowns/${show.showID}`}>
                    <div className="dailyshow">
                        <p id='topdaily'>{show.type} · {show.starttime > 12 ? `${show.starttime - 12}pm` : `${show.starttime}am`}</p>
                        <p id='bottomdaily'> {show.value}</p>
                        <p id='showchannel'>Channel: {show.channel}</p>
                    </div>
                </Link>
            </div>

        </div>
    )
};

export default IndividualRundown;
