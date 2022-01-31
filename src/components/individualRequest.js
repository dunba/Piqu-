import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';



const IndividualRequest = ({ info, handleRequest }) => {
    return (
        <div className="showtitleandhed" onClick={handleRequest} >
            <Link style={{ color: 'inherit', textDecoration: "none" }} to={`/requests/${info.rqid}`}>
                <div className="postingheader">
                    <div className='requestaviholder'

                    ><img id='requestavi' src={info.poster.avi} /></div>

                    <div >
                        <p id='newrequesttype'>New {info.type} Request </p>
                        <div className="timeandname">
                            <p id='sendername' href=''>{`${info.poster.firstName} ${info.poster.lastName}`} • 2h</p>
                        </div>
                    </div>
                </div>
                {info.url && (
                    <p className='reqbody'>
                        <b id='reqhead'>URL: </b>
                        {info.url}
                    </p>
                )}
                {info.hed && (
                    <p className='reqbody'>
                        <b id='reqhead'>HED: </b>
                        {info.hed}
                    </p>
                )}
                {info.shortHed && (
                    <p className='reqbody'>
                        <b id='reqhead'>SHORT HED: </b>
                        {info.shortHed}
                    </p>
                )}


                <br />


            </Link>
            <div className="timeanddate">
                <div id='reqdate'>Due: {info.deadline.toDate()}</div>
                <div className="badges">
                    <Tooltip arrow title={'Action'} ><MoreVertIcon id="verticon" /></Tooltip>
                </div>
            </div>
        </div>
    )
}

export default IndividualRequest
