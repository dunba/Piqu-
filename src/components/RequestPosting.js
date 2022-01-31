import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ArticleIcon from "@mui/icons-material/Article";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FlagIcon from "@mui/icons-material/Flag";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { Tooltip, Modal, Badge, Popover } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const RequestPosting = ({ info, handleDelete
}) => {
  const today = new Date();
  let timeanddate = today.toDateString();
  const [isRequestOpen, setisRequestOpen] = useState(false);
  const [isVertClicked, setisVertClicked] = useState(false);



  const handleRequest = () => {
    if (!isRequestOpen) {
      setisRequestOpen(true);
      console.log("opened popup");
    } else if (isRequestOpen) {
      setisRequestOpen(false);
      console.log("popup closed");
    }
  };

  const handleVert = () => {
    if (!isVertClicked) {
      setisVertClicked(true);
      console.log("opened popup");
    } else if (isVertClicked) {
      setisVertClicked(false);
      console.log("popup closed");
    }
  };


  return (
    // this div below is the requestpopup
    <div className="openedrequest">

      <div className="showtitleandhed" onClick={handleRequest} >
        <Link style={{ color: 'inherit', textDecoration: "none" }} to={`/requests/${info.rqid.toString()}`}>
          <div className="postingheader">
            <div className='requestaviholder'

            ><img id='requestavi' src={info.poster.avi} /></div>

            <div >
              <p id='newrequesttype'>New {info.type} Request </p>
              <div className="timeandname">
                <p id='sendername' href=''>{info.poster.name} • {new Date(info.date).toTimeString()}</p>
              </div>
            </div>
          </div>
          {info.url && (
            <p className='reqbody'>
              <b id='reqhead'>URL: </b>
              {info.url}
            </p>
          )}
          {info.hed && (
            <p className='reqbody'>
              <b id='reqhead'>HED: </b>
              {info.hed}
            </p>
          )}
          {info.shortHed && (
            <p className='reqbody'>
              <b id='reqhead'>SHORT HED: </b>
              {info.shortHed}
            </p>
          )}
          {info.subject && (
            <p className='reqbody'>
              <b id='reqhead'>Subject: </b>
              {info.subject}
            </p>
          )}


          <br />


        </Link>
        <div className="timeanddate">
          <div id='reqdate'>Due: {info.deadline.toString()}</div>
          <div className="badges">
            {info.deletable && (
              <Tooltip arrow title={'Delete'} ><DeleteIcon onClick={() => { handleDelete(info.id) }} style={{ transform: 'scale(0.7)' }} id="verticon" /></Tooltip>
            )}

          </div>
        </div>
      </div>




    </div>
  );
};

export default RequestPosting;
