import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';



const IndividualRequest = ({ rqid, senderPic, url, handleRequest, uploadColor, type, senderName, hed, shortHed, deadline }) => {
    return (
        <div className="showtitleandhed" onClick={handleRequest} >
            <Link style={{ color: 'inherit', textDecoration: "none" }} to={`/requests/${rqid}`}>
                <div className="postingheader">
                    <div className='requestaviholder'

                    ><img id='requestavi' src={senderPic} /></div>

                    <div >
                        <p id='newrequesttype'>New {type} Request </p>
                        <div className="timeandname">
                            <p id='sendername' href=''>{senderName} • 2h</p>
                        </div>
                    </div>
                </div>
                {url && (
                    <p className='reqbody'>
                        <b id='reqhead'>URL: </b>
                        {url}
                    </p>
                )}
                {hed && (
                    <p className='reqbody'>
                        <b id='reqhead'>HED: </b>
                        {hed}
                    </p>
                )}
                {shortHed && (
                    <p className='reqbody'>
                        <b id='reqhead'>SHORT HED: </b>
                        {shortHed}
                    </p>
                )}


                <br />


            </Link>
            <div className="timeanddate">
                <div id='reqdate'>Due: {deadline.toDateString()}</div>
                <div className="badges">
                    <Tooltip arrow title={'Action'} ><MoreVertIcon id="verticon" /></Tooltip>
                </div>
            </div>
        </div>
    )
}

export default IndividualRequest
