import React from 'react'
import '../css/showclips.css'
import CloseIcon from "@mui/icons-material/Close";


const ShowClips = ({ handleShowClips, show }) => {
    return (
        <div className='clipspopup'>
            <div className='openedclips'>
                <div className="requestheader">
                    <b>Rundown</b>
                    <div >
                        <CloseIcon id="closeicon" onClick={handleShowClips} />
                    </div>
                </div>
                {show.label}
            </div>

        </div>
    )
}

export default ShowClips
