import { React, useEffect, useState, useRef } from "react";
import db from '../firebase-config'
import { collection, getDocs, addDoc } from '@firebase/firestore'
import Select from 'react-select'
import uuid from 'react-uuid'

const Uploadrequest = ({ showList }) => {
    const requestsRef = collection(db, 'requestsList')
    const dunbaavi = 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Black'
    const mosRef = useRef();
    const catRef = useRef();
    const [show, setShow] = useState(null)
    const [showid, setShowID] = useState(null)
    const showName = useRef();
    const hedRef = useRef();
    const shortHedRef = useRef();
    const dekRef = useRef();
    const deadlineRef = useRef();
    const fileRef = useRef();

    const postRequest = async (e) => {
        e.preventDefault()

        await addDoc(requestsRef, { deletable: true, poster: { name: 'Dunba Tehinse', avi: dunbaavi }, date: new Date(), deadline: new Date(deadlineRef.current.value), hed: hedRef.current.value, type: 'Upload', rqid: uuid(), show: show, showid: showid, dek: dekRef.current.value, shorthed: shortHedRef.current.value, mos: mosRef.current.value })
        window.location.reload()
    }

    const selectHandler = (e) => {
        setShow(e.value);
        setShowID(e.showID)
    }

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
            <form onSubmit={postRequest}>
                <b>Show:</b>
                <br />
                <Select onChange={selectHandler} placeholder={'Filter'} options={showList} />

                <br />
                <b>Primary Category:</b>
                <br />
                <input required ref={catRef} type='text' />
                <br />
                <b>Headline:</b>
                <br />
                <textarea required id="hedtextarea" ref={hedRef} />
                <br />
                <b>Short Hed:</b>
                <br />
                <textarea required id="hedtextarea" ref={shortHedRef} />
                <br />
                <b>Description:</b>
                <br />
                <textarea required id="dektextarea" ref={dekRef} />
                <br />
                <b>MOS:</b>
                <br />
                <input required type="text" ref={mosRef} />
                <br />
                <b>Deadline:</b>
                <br />

                <input required type="date" ref={deadlineRef} />
                <br />


                {/* <b>Attachment:</b>
                <br /> */}

                {/* <input type="file" ref={fileRef} /> */}
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
