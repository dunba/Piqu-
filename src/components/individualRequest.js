import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from 'react-router-dom';



const IndividualRequest = ({ rqid, senderPic, url, handleRequest, uploadColor, type, senderName, hed, shortHed, deadline }) => {
    return (
        <div className="showtitleandhed" onClick={handleRequest}>
            <Link style={{ color: 'inherit', textDecoration: "none" }} to={`/requests/${rqid}`}>
                <div className="postingheader">
                    <div className='requestaviholder'

                    ><img id='requestavi' src={senderPic} /></div>

                    <div>
                        <p id='newrequesttype'>New {type} Request </p>
                        <div className="timeandname">
                            <a id='sendername' href=''>{senderName} • 2h</a>
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
                <div className="timeanddate">
                    <div id='reqdate'>Due: {deadline.toDateString()}</div>
                    <div className="badges">        <MoreVertIcon id="verticon" />
                    </div>
                </div>
                {/* <hr />
          <div className="requestfooter">
            <div>

            </div>

            <div>
              <b>{Math.floor(Math.random() * 10) + 1} mins ago</b>
            </div> */}
                {/* </div> */}
            </Link>
        </div>
    )
}

export default IndividualRequest
