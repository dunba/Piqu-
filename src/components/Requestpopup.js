import React from 'react'
import requestData from '../dummy data/requestdata';
import { useState, useEffect } from 'react'
import CloseIcon from "@mui/icons-material/Close";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import '../css/requests.css'

const Requestpopup = ({ match }) => {
    const today = new Date();
    const [selectdata, setSelectdata] = useState(null)

    const requestid = match.params.id
    const data = requestData.filter(req => req.rqid == requestid)
    console.log(selectdata)
    useEffect(() => {
        setSelectdata(data[0]);
    }, [])
    return (
        <div className="flexcontainer">
            {selectdata ? (
                <div>
                    <div className="requestheader">
                        <b>Request</b>
                        <div>
                            <CloseIcon id="closeicon" />
                        </div>
                    </div>

                    <div className="informationsection">
                        <div className="announcementposting">
                            <div className="announcementpicandinfo">
                                <div>
                                    <img id="announcementavi" src={selectdata.poster.avi} />
                                </div>
                                <div className="announcementheadandname">
                                    <b>New {selectdata.type} Request</b>
                                    <p> {`${selectdata.poster.firstName} ${selectdata.poster.lastName}`}</p>
                                    <p>{today.toDateString()}</p>
                                </div>
                            </div>
                        </div>

                        {selectdata.show && (
                            <b>SHOW
                                <p>{selectdata.show}</p>
                            </b>

                        )}

                        {selectdata.url && (
                            <p className='reqbody'>
                                <b id='reqhead'>URL: </b>
                                {selectdata.url}
                            </p>
                        )}
                        <br />


                        {selectdata.hed && (

                            <div>HED
                                {selectdata.hed}
                            </div>


                        )}
                        <br />

                        {selectdata.shortHed && (

                            <div>Short Hed:
                                {selectdata.shortHed}
                            </div>


                        )}
                        <br />
                        {selectdata.dek && (

                            <div>Dek:
                                {selectdata.dek}
                            </div>


                        )}
                        <br />
                        {selectdata.attachments && (
                            <p>
                                <b>Attachments</b>
                                <br />
                                <a href="">{selectdata.attachments}</a>{" "}
                                <CloudDownloadIcon id="downloadicon" />
                            </p>

                        )}

                        <br />
                        {selectdata.mos ? (
                            <p>
                                <b>MOS</b>
                                <br />
                                {selectdata.mos}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <br />

                    <div className="submitdiv">
                        {" "}
                        <button>Take</button>
                    </div>
                </div>

            ) : (
                ""
            )}
        </div>
    )
}

export default Requestpopup
