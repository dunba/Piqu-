import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ArticleIcon from "@mui/icons-material/Article";
const RequestPosting = ({
  attachments,
  showColor,
  show,
  showAvatar,
  hed,
  shortHed,
}) => {
  return (
    <div className="requestposting">
      <div
        className="showpic"
        style={{
          width: "3em",
          backgroundColor: `#${showColor}`,
          borderradius: "50%",
        }}
      >
        {" "}
        {attachments ? <AttachFileIcon /> : ""}
      </div>
      <div className="showtitleandhed">
        <p>
          <b>Show:</b> {show}
        </p>
        <p>
          <b>Hed: </b>
          {hed}
        </p>
        <p>
          <b>Short Head: </b>
          {shortHed}
        </p>
        <hr />
        <div className="requestfooter">
          <div>
            <ArticleIcon id="requesticon" />
            <CheckCircleIcon id="requesticon_approve" />
            <CancelIcon id="requesticon_cancel" />
          </div>

          <div>
            <p>2 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPosting;
