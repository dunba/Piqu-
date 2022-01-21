import React from 'react'
import { useState, useRef } from "react";
import Select from 'react-select'
import showList from '../dummy data/showList';
const Uploadrequest = () => {
    const mosRef = useRef();
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
        <div className='formholder'>
            <form>
                <b>Show:</b>
                <br />
                <Select placeholder={'Filter'} options={showList} />

                <br />
                <b>Primary Category:</b>
                <br />
                <input type='text' />
                <br />
                <b>Headline:</b>
                <br />
                <textarea id="hedtextarea" ref={hedRef} />
                <br />
                <b>Short Hed:</b>
                <br />
                <textarea id="hedtextarea" ref={shortHedRef} />
                <br />
                <b>Description:</b>
                <br />
                <textarea id="dektextarea" ref={dekRef} />
                <br />
                <b>MOS:</b>
                <br />
                <input type="text" ref={mosRef} />
                <br />
                <b>Deadline:</b>
                <br />

                <input type="date" ref={deadlineRef} />
                <br />


                <b>Attachment:</b>
                <br />

                <input type="file" ref={fileRef} />
                <br />
                <div className="submitdiv">
                    {" "}
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Uploadrequest
