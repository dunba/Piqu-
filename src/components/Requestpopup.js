import { React, useEffect, useState } from "react";
import db from '../firebase-config'
import { collection, getDocs, getDoc, onSnapshot, doc, deleteDoc } from '@firebase/firestore'
import requestData from '../dummy data/requestdata';
import CloseIcon from "@mui/icons-material/Close";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import '../css/requests.css'
import Loading from 'react-loading'
import { Tooltip, Modal, Badge, Popover } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Requestpopup = ({ match }) => {
    const today = new Date();
    const [selectdata, setSelectdata] = useState(null)
    const requestid = match.params.id

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this request?')) {
            const reqDoc = doc(db, "requestsList", id);
            await deleteDoc(reqDoc)
            window.location.assign('/');
        }


    }



    ///this section fetches the requestsList from the db
    const [loading, setLoading] = useState(false)
    const reqRef = collection(db, "requestsList");
    const [reqList, setReqList] = useState([]);

    const fetchreqList = async () => {
        setLoading(true)
        const data = await getDocs(reqRef)
        const holderArray = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        const singlereq = holderArray.filter(req => req.id == requestid)
        setSelectdata(singlereq[0])
        setLoading(false)
        console.log(selectdata)
    }
    useEffect(() => {
        fetchreqList()
    }, [])









    return (
        <div className="reqcontainer">
            <div className='reqholder'>

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
                                        <b>{selectdata.type} Request</b>
                                        <p> {selectdata.poster.name}</p>
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
                                    <a target='_blank' href={selectdata.url}>{selectdata.url}</a>
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
                            {selectdata.deletable && (
                                <Tooltip arrow title={"Delete"}>
                                    <DeleteIcon
                                        onClick={() => {
                                            handleDelete(selectdata.id);
                                        }}
                                        style={{ transform: "scale(0.7)" }}
                                        id="verticon"
                                    />
                                </Tooltip>
                            )}
                        </div>
                    </div>

                ) : (
                    ""
                )}
            </div>
        </div>
    )
}

export default Requestpopup
