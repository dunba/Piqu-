import React from 'react'

const RequestPosting = ({ attachments, showColor, show, showAvatar, hed, shortHed }) => {
    return (
        <div className="requestposting">
            {attachments ? <b>A</b> : ''}
            <div className='showpic' style={{
                width: '3em',
                backgroundColor: `#${showColor}`,
                borderradius: '50%'
            }}>

            </div>
            <div className='showtitleandhed'>
                <p><b>Show:</b> {show}</p>
                <p><b>Hed: </b>{hed}</p>
                <p><b>Short Head: </b>{shortHed}</p>
                <hr />
                <p>2 mins ago</p>
                <p>See More...</p>
            </div>


        </div >


    )
}

export default RequestPosting
