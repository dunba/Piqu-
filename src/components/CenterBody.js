import React from "react";
import "../css/centerbody.css";
import requestData from "./requestdata";
import { useState, useRef } from "react";
import RequestPosting from "./RequestPosting";
import NewRequest from "./NewRequest";
import SearchIcon from '@mui/icons-material/Search';
const CenterBody = () => {
  const dailyData = useState(requestData);
  const jsonData = requestData;

  const handleSubmit = e => {
    e.preventDefault();
    console.log(jsonData);
  };
  const searchquery = useRef();
  const filter = useRef();
  const top = useRef();
  const handleSearch = e => {
    e.preventDefault();
    console.log("submit");
    console.log(searchquery.current.value);
    console.log(filter.current.value);
  };

  const [isNewRequestMade, setIsNewRequestMade] = useState(false);
  const handleNewRequest = (e) => {
    e.preventDefault();
    if (!isNewRequestMade) {
      console.log('new request made')
      setIsNewRequestMade(true);
    }
    else {
      setIsNewRequestMade(false);
      console.log('closing request')
    }
  }

  const handleScroll = (e) => {
    e.preventDefault();
    top.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  return (
    <div className="requestcontainer">
      <div className="requestsheader">
        <div>
          <select ref={filter} name="filter" id="filterdropdown">
            <option>All</option>
            <option>Red and Blue</option>
            <option>CBS Mornings</option>
            <option>CBS Evening News</option>
            <option>The Takeout</option>
          </select>
        </div>
        <div>
          <input ref={searchquery} placeholder="Search Piqué" type='search' />
        </div>
        <div>

          <SearchIcon onClick={handleSearch} />
        </div>
      </div>
      <div className="buttondiv"><button onClick={handleNewRequest} id='requestbutton'>New</button></div>
      {isNewRequestMade ? <NewRequest handleNewRequest={handleNewRequest} onClick={handleNewRequest} /> : ''}

      <div className="requestsholder">
        {jsonData.map(info => (
          <RequestPosting
            deadline={info.deadline}
            ref={top}
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
  );
};

export default CenterBody;
