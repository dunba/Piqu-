import React from 'react'
import requestData from './requestdata'
import { useState, useEffect } from 'react'
import CloseIcon from "@mui/icons-material/Close";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const Requestpopup = ({ match }) => {
    const [selectdata, setSelectdata] = useState(null)

    const requestid = match.params.id
    const data = requestData.filter(req => req.rqid == requestid)
    console.log(selectdata)
    useEffect(() => {
        setSelectdata(data[0]);
    }, [])
    return (
        <div>
            {/* request popup */}
            {selectdata ? (
                <div className="requestpopup">
                    <div className="popupinfo">
                        <div className="requestheader">
                            <div>REQUEST</div>
                            <div>
                                <CloseIcon id="closeicon" />
                            </div>
                        </div>
                        <div className="informationsection">
                            <b>SHOW</b>
                            <br />
                            {selectdata.show}
                            <br />
                            <b>HED </b>
                            <br />
                            {selectdata.hed}
                            <br />
                            <b>SHORT HED </b>
                            <br />
                            {selectdata.shortHed}
                            <br />
                            <b>DEK</b>
                            <br />
                            {selectdata.dek}
                            <br />
                            {selectdata.attachments ? (
                                <p>
                                    <b>Attachments</b>
                                    <br />
                                    <a href="">{selectdata.attachments}</a>{" "}
                                    <CloudDownloadIcon id="downloadicon" />
                                </p>
                            ) : (
                                ""
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
                        <div className="informationsection">
                            <div> Requested by: </div>

                            <div>
                                <img
                                    id="profilepic"
                                    src={selectdata.senderPic}
                                />{" "}
                                {selectdata.senderName}
                            </div>
                        </div>
                        <div className="submitdiv">
                            {" "}
                            <button>Take</button>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
            {/* end of request popup */}
        </div>
    )
}

export default Requestpopup
