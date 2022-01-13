import React from 'react'

const ReadUpload = ({ handleRequest, uploadColor, type, senderName, hed, shortHed, deadline }) => {
    return (
        <div className="showtitleandhed" onClick={handleRequest}>
            <div className="postingheader">
                <div
                    style={{
                        width: "2em",
                        borderRadius: "50%",
                        height: "2em",
                        backgroundColor: `#${uploadColor}`,
                    }}
                />

                <div>
                    <p>New {type} Request </p>
                    <div className="timeandname">
                        <a>{senderName}</a>•<p>2 h</p>
                    </div>
                </div>
            </div>
            <p>
                <b>HED: </b>
                {hed}
            </p>
            <p>
                <b>SHORT HED: </b>
                {shortHed}
            </p>
            <hr />
            <div className="timeanddate">
                <div>Due: {deadline.toDateString()}</div>
                <div className="badges"></div>
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

export default ReadUpload
