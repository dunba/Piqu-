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
import ReadUpload from "./ReadUpload";
import Readtakedown from "./Readtakedown";
const RequestPosting = ({
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
            <div className="informationsection">
              <div> Requested by: </div>

              <div>
                <img
                  id="profilepic"
                  src="https://thispersondoesnotexist.com/image"
                />{" "}
                {senderName}
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

      {type === "Upload" ? (
        <ReadUpload
          handleRequest={handleRequest}
          uploadColor={uploadColor}
          type={type}
          senderName={senderName}
          hed={hed}
          shortHed={shortHed}
          deadline={deadline}
        />
      ) : (
        ""
      )}
      {type === "Takedown" ? (
        <Readtakedown
          handleRequest={handleRequest}
          takedownColor={takedownColor}
          type={type}
          senderName={senderName}
          url={url}
          deadline={deadline}
        />
      ) : (
        ""
      )}

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

export default RequestPosting;
