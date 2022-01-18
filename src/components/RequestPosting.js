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
import Close from "@mui/icons-material/Close";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import DeleteIcon from "@mui/icons-material/Delete";
import IndividualRequest from "./individualRequest";
import Readtakedown from "./Readtakedown";
const RequestPosting = ({ rqid, senderPic,
  url,
  senderName,
  type,
  deadline,
  mos,
  started,
  flagged,
  opened,
  attachments,
  showColor,
  show,
  showAvatar,
  hed,
  shortHed,
  dek,
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

  let takedownColor = "FF6666";
  let uploadColor = "CCFF99";
  let RequestColor = "99CCFF";

  return (
    // this div below is the requestpopup
    <div className="openedrequest">


      <IndividualRequest
        rqid={rqid}
        senderPic={senderPic}
        handleRequest={handleRequest}
        uploadColor={uploadColor}
        type={type}
        senderName={senderName}
        hed={hed}
        shortHed={shortHed}
        deadline={deadline}

        url={url}

      />




    </div>
  );
};

export default RequestPosting;
