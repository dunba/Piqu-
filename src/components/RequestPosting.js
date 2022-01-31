import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Tooltip, Modal, Badge, Popover } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ReactTimeAgo from "react-time-ago";
import ShareIcon from "@mui/icons-material/Share";
import { Snackbar, Alert } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const RequestPosting = ({ info, handleDelete }) => {
  const today = new Date();
  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    const urlbase = window.location.host;
    const fullurl = `${urlbase}/requests/${info.id}`;
    await navigator.clipboard.writeText(fullurl);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const infodate = info.date.toDate().toDateString();

  const infodeadline = info.deadline.toDate().toDateString();

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
      <div className="showtitleandhed" onClick={handleRequest}>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          to={`/requests/${info.id.toString()}`}
        >
          <div className="postingheader">
            <div className="requestaviholder">
              <img id="requestavi" src={info.poster.avi} />
            </div>

            <div>
              <p id="newrequesttype">New {info.type} Request </p>
              <div className="timeandname">
                <p id="sendername" href="">
                  {info.poster.name} • {infodate}
                </p>
              </div>
            </div>
          </div>
          {info.url && (
            <p className="reqbody">
              <b id="reqhead">URL: </b>
              {info.url}
            </p>
          )}
          {info.hed && (
            <p className="reqbody">
              <b id="reqhead">HED: </b>
              {info.hed}
            </p>
          )}
          {info.shortHed && (
            <p className="reqbody">
              <b id="reqhead">SHORT HED: </b>
              {info.shortHed}
            </p>
          )}
          {info.subject && (
            <p className="reqbody">
              <b id="reqhead">Subject: </b>
              {info.subject}
            </p>
          )}

          <br />
        </Link>
        <div className="timeanddate">
          <div id="reqdate">Due: {infodeadline}</div>
          <div className="badges">
            {info.deletable && (
              <Tooltip arrow title={"Delete"}>
                <DeleteIcon
                  onClick={() => {
                    handleDelete(info.id);
                  }}
                  style={{ transform: "scale(0.7)" }}
                  id="verticon"
                />
              </Tooltip>
            )}
            <Tooltip arrow title={"Share"}>
              <ShareIcon
                onClick={handleClick}
                style={{ transform: "scale(0.7)" }}
                id="verticon"
              />
            </Tooltip>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Success! Link copied to clipboard.
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPosting;
