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
      <div> {jsonData ? "Data Present" : "Data Missing"}</div>

      <div className="requestsholder">

        <div>
          {jsonData.map(info => (
            <RequestPosting showColor={info.showColor} shortHed={info.shorthed}
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
