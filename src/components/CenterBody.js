import React from "react";
import "../css/centerbody.css";
import requestData from "../dummy data/requestdata";
import { useState, useRef } from "react";
import RequestPosting from "./RequestPosting";
import NewRequest from "./NewRequest";
import SearchIcon from '@mui/icons-material/Search';
import Select from 'react-select'
import showList from "../dummy data/showList";
import ClearAllIcon from '@mui/icons-material/ClearAll';
const CenterBody = () => {

  const dailyData = requestData;
  const [jsonData, setJsonData] = useState(requestData);
  const [isFilterOn, setIsFilterOn] = useState(false)
  const [showInQuestion, setShowInQuestion] = useState(null)

  const checkShows = (x, y) => {
    x.length === y.length ? setIsFilterOn(false) : setIsFilterOn(true)
  }

  // this filters the show by showID
  const filterShows = (e) => {
    console.log(e)
    setShowInQuestion(e.value)
    let tester = dailyData.filter(request => request.showid.toLowerCase() == e.showid.toLowerCase());
    console.log(tester);
    checkShows(tester, showList);
    setJsonData(tester);


  }

  // this will handle the clear filter button, once the show filters are on
  const handleFilterClear = (e) => {
    e.preventDefault()
    setIsFilterOn(false)
    setJsonData(requestData)

  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(jsonData);
  };
  const [searchquery, setSearchQuery] = useState(null);
  const [searchedArray, setSearchedArray] = useState(null)
  const searchRef = useRef();
  const filterRef = useRef();
  const top = useRef();

  const handleSearch = e => {
    setSearchQuery(searchRef.current.value)
    console.log(searchquery);
    console.log(requestData.filter(show => show.hed.toLowerCase().includes(searchquery.toLowerCase().toString())))



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

      <div className="requestheader">

        <Select clearvalue={handleFilterClear} onChange={(e) => filterShows(e)} ref={filterRef} placeholder={'Filter'} options={showList} />
        {isFilterOn ? <button onClick={handleFilterClear}>Clear Filter</button> : ''}

        <div>
          <input ref={searchRef} placeholder="Search Piqué" type='search' onChange={handleSearch} />  <SearchIcon onClick={handleSearch} />
        </div>

      </div>
      <div className="buttondiv"><button onClick={handleNewRequest} id='requestbutton'>New</button></div>

      {isNewRequestMade ? <NewRequest handleNewRequest={handleNewRequest} onClick={handleNewRequest} /> : ''}
      <br />
      {jsonData.length == 0 ? <div>No requests found for <b>{showInQuestion}</b></div> : ''}
      <div className="requestsholder">
        {jsonData.map(info => (
          <RequestPosting
            rqid={info.rqid}
            senderPic={info.senderPic}
            url={info.url}
            senderName={info.senderName}
            type={info.type}
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
