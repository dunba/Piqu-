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

const RequestPosting = ({
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

  // this returns the component of a request that has been read/opened by an AVP.
  return (
    // this div below is the requestpopup
    <div className="openedrequest">
      {/* request popup */}
      {isRequestOpen ? (
        <div className="requestpopup">
          <div className="popupinfo">
            <div className="requestheader">
              <div>REQUEST</div>
              <div onClick={handleRequest}>
                <CloseIcon id="closeicon" />
              </div>
            </div>
            <div className="informationsection">
              <b>SHOW</b>
              <br />
              {show}
              <br />
              <b>HED </b>
              <br />
              {hed}
              <br />
              <b>SHORT HED </b>
              <br />
              {shortHed}
              <br />
              <b>DEK</b>
              <br />
              {dek}
              <br />
              {attachments ? (
                <p>
                  <b>Attachments</b>
                  <br />
                  <a href="">{attachments}</a>{" "}
                  <CloudDownloadIcon id="downloadicon" />
                </p>
              ) : (
                ""
              )}

              <br />
              {mos ? (
                <p>
                  <b>MOS</b>
                  <br />
                  {mos}
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
        </div>
      ) : (
        ""
      )}

      <div
        className="showpic"
        style={{
          width: "3em",

          backgroundColor: `#${showColor}`,
        }}
      >
        {" "}
        {attachments ? <AttachFileIcon /> : ""}
      </div>
      <div className="showtitleandhed" onClick={handleRequest}>
        <p>
          <b>SHOW:</b> {show}
        </p>
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
          <div className="badges">
            <p>{flagged ? <FlagIcon id="badgeicon" /> : ""}</p>
            {started ? <LockOutlinedIcon id="badgeicon" /> : ""}
            {!opened ? <b id="badgeicon">NEW</b> : ""}
          </div>
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
      <div className="verticonholder">
        <MoreVertIcon id="verticon" onClick={handleVert} />
        {isVertClicked ? (
          <div className="vertpopup">
            <ArticleIcon id="requesticon" />
            <CheckCircleIcon id="requesticon_approve" />
            <CancelIcon id="requesticon_cancel" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

// this returns the component of a request that has NOT been read/opened by an AVP.

export default RequestPosting;
