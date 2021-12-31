import React from "react";
import "../css/centerbody.css";
import requestData from "./requestdata";
import { useState } from "react";
import RequestPosting from "./RequestPosting";

const CenterBody = () => {
  const dailyData = useState(requestData);
  const jsonData = requestData;

  const handleSubmit = e => {
    e.preventDefault();
    console.log(jsonData);
  };
  return (
    <div className="requestcontainer">
      <div className="requestsheader">
        <div>
          <select name="filter" id="filterdropdown">
            <option>All</option>
            <option>Red and Blue</option>
            <option>CBS Mornings</option>
            <option>CBS Evening News</option>
            <option>The Takeout</option>
          </select>
        </div>
        <div>
          <input placeholder="Search Piqué" />
        </div>
        <div>
          {" "}
          <button>Submit</button>
        </div>
      </div>

      <div className="requestsholder">
        <div>
          {jsonData.map(info => (
            <RequestPosting
              mos={info.mos}
              dek={info.dek}
              started={info.started}
              flagged={info.flagged}
              opened={info.opened}
              showColor={info.showColor}
              shortHed={info.shorthed}
              show={info.show}
              attachments={info.attachments}
              showAvatar={info.showAvatar}
              hed={info.hed}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CenterBody;
