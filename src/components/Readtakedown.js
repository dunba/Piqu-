import React from 'react'

const Readtakedown = ({ handleRequest, takedownColor, type, senderName, url, deadline }) => {
    return (
        <div className="showtitleandhed" onClick={handleRequest}>
            <div className="postingheader">
                <div
                    style={{
                        width: "2em",
                        borderRadius: "50%",
                        height: "2em",

                        backgroundColor: `#${takedownColor}`,
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
                <b>URL: </b>
                {url}
            </p>

            <hr />
            <div className="timeanddate">
                <div>Due: {deadline.toDateString()}</div>
                <div className="badges"></div>
            </div>

        </div>
    )
}

export default Readtakedown