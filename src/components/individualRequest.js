import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";


const IndividualRequest = ({ senderPic, url, handleRequest, uploadColor, type, senderName, hed, shortHed, deadline }) => {
    return (
        <div className="showtitleandhed" onClick={handleRequest}>
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
                <p>
                    <b>URL: </b>
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
            <hr />
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
        </div>
    )
}

export default IndividualRequest
