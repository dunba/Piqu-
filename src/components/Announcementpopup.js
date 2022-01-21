import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Announcementpopup = ({ handleModal, announcement }) => {
  return (
    <div className="announcementpopup">
      <div className="openedannouncement">
        <div className="announcementheader">
          <b>Announcement</b>
          <div>
            <CloseIcon id="closeicon" onClick={handleModal} />
          </div>
        </div>
        <div className="announcementposting">
          <div className="announcementpicandinfo">
            <div>
              <img id="announcementavi" src={announcement.poster.avi} />
            </div>
            <div className="announcementheadandname">
              <b>{announcement.head}</b>
              <p> {announcement.poster.firstName} {announcement.poster.lastName}</p>
              <p>{announcement.timePosted.toDateString()}</p>
            </div>
          </div>
        </div>

        <hr />
        <div className="announcementbody"> {announcement.body}</div>
        <hr />
      </div>
    </div>
  );
};

export default Announcementpopup;
