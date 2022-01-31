import { React, useEffect, useState, useRef } from "react";
import db from '../firebase-config'
import { collection, getDocs, addDoc } from '@firebase/firestore'
import uuid from 'react-uuid'
import Select from 'react-select'

const Otherrequest = ({ showList }) => {
    const requestsRef = collection(db, 'requestsList')
    const selectHandler = (e) => {
        setShow(e.value);
        setShowID(e.showID)
    }

    const dunbaavi = 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Black'
    const deadlineRef = useRef()
    const messageRef = useRef()
    const subjectRef = useRef()
    const [show, setShow] = useState(null)
    const [showid, setShowID] = useState(null)

    const postRequest = async (e) => {
        e.preventDefault()
        await addDoc(requestsRef, {
            deletable: true, poster: { name: 'Dunba Tehinse', avi: dunbaavi }, date: new Date(), deadline: new Date(deadlineRef.current.value), type: 'Other', rqid: uuid(),
            subject: subjectRef.current.value, message: messageRef.current.value, show: show, showid: showid
        })
        window.location.reload()
    }

    return (
        <div>
            <form onSubmit={postRequest} method="POST">
                <Select onChange={selectHandler} placeholder={'Filter'} options={showList} />
                <br />
                <b>Subject:</b>
                <br />
                <input type='text' ref={subjectRef} />
                <br />
                <b>Message:</b>
                <br />
                <textarea ref={messageRef} id="hedtextarea" />
                <br />

                <br />

                <b>Deadline:</b>
                <br />

                <input ref={deadlineRef} type="date" />
                <br />
                <div className="submitdiv">
                    {" "}
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Otherrequest
