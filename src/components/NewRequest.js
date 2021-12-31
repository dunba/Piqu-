import React from 'react'
import '../css/newrequest.css'
import CloseIcon from "@mui/icons-material/Close";

const NewRequest = ({ handleNewRequest }) => {
    return (
        <div className='newrequest'>
            <div className='nrpopup'>
                <div className="requesthd">
                    <div>NEW REQUEST</div>
                    <div onClick={handleNewRequest}>
                        <CloseIcon id="closeicon" />
                    </div>
                </div>

                <div className="informationsection">
                    <b>SHOW</b>
                    <br />
                    PARIS
                    <br />
                    LIGHTS
                    <br />
                    LOVe

                </div>
            </div>
        </div>
    )
}

export default NewRequest
