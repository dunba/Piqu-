import React from "react";
import "../css/newrequest.css";
import { useState, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";

const NewRequest = ({ handleNewRequest }) => {
  const showName = useRef();
  const hedRef = useRef();
  const shortHedRef = useRef();
  const dekRef = useRef();
  const deadlineRef = useRef();
  const fileRef = useRef();
  const submitRequest = e => {
    e.preventDefault();
    console.log("submitRequest");
    console.log(showName.current.value);
    console.log(hedRef.current.value);
    console.log(shortHedRef.current.value);
    console.log(dekRef.current.value);
    console.log(deadlineRef.current.value);
    console.log(fileRef);
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
          <form onSubmit={submitRequest}>
            <b>SHOW</b>
            <br />
            <select
              ref={showName}
              name="filter"
              value="Show"
              id="filterdropdown"
            >
              <option>Red and Blue</option>
              <option>CBS Mornings</option>
              <option>CBS Evening News</option>
              <option>The Takeout</option>
            </select>
            <br />
            <b>HEADLINE</b>
            <br />
            <textarea id="hedtextarea" ref={hedRef} />
            <br />
            <b>SHORT HED</b>
            <br />
            <textarea id="hedtextarea" ref={shortHedRef} />
            <br />
            <b>DESCRIPTION</b>
            <br />
            <textarea id="dektextarea" ref={dekRef} />
            <br />
            <b>Deadline</b>
            <br />

            <input type="date" ref={deadlineRef} />
            <br />
            <b>Attachment</b>
            <br />
            <input type="file" ref={fileRef} />
            <br />
            <div className="submitdiv">
              {" "}
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewRequest;
