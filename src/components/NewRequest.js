import React from "react";
import "../css/newrequest.css";
import { useState, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Uploadrequest from "./Uploadrequest";
import Takedownrequest from "./Takedownrequest";
import Otherrequest from "./Otherrequest";
import Select from 'react-select'
import showList from "../dummy data/showList";

const NewRequest = ({ handleNewRequest }) => {
  const [isRadioClicked, setIsRadioClicked] = useState(false);
  const [radioOption, setRadioOption] = useState(null)
  const handleRadio = value => {
    !isRadioClicked ? setIsRadioClicked(true) : setIsRadioClicked(false);
  };
  return (
    <div className="newrequest">
      <div className="nrpopup">
        <div className="requesthd">
          <div>NEW REQUEST</div>
          <div onClick={handleNewRequest}>
            <CloseIcon id="closeicon" />
          </div>
        </div>

        <div className="informationsection">
          <b>Request Type</b>
          <br />
          <div className="radioSelects">
            <section className="radiosection">
              <input
                id="uploadrequest"
                type="radio"
                name="requesttype"
                value="Upload"
                onClick={() => setRadioOption('Upload')}
              />
              <label for="uploadrequest"> Upload</label>
            </section>
            <section className="radiosection">
              <input
                id="takedownrequest"
                type="radio"
                name="requesttype"
                value="Takedown"
                onClick={() => setRadioOption('Takedown')}
              />
              <label for="takedownrequest"> Takedown</label>
            </section>
            <section className="radiosection">
              <input
                id="otherrequest"
                type="radio"
                name="requesttype"
                value="Other"
                onClick={() => setRadioOption('Other')}
              />
              <label for="otherrequest"> Other</label>
            </section>
          </div>
        </div>
        {radioOption === 'Upload' ? (
          <div className="informationsection">
            <Uploadrequest />
          </div>
        ) : (
          ""
        )}
        {radioOption === 'Takedown' ? (
          <div className="informationsection">
            <Takedownrequest />
          </div>
        ) : (
          ""
        )}
        {radioOption === 'Other' ? (
          <div className="informationsection">
            <Otherrequest />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NewRequest;
