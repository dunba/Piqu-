import { React, useEffect, useState, useRef } from "react";
import db from '../firebase-config'
import { collection, getDocs, addDoc } from '@firebase/firestore'
import Select from 'react-select'
import uuid from 'react-uuid'

const Takedownrequest = ({ showList }) => {

    const requestsRef = collection(db, 'requestsList')
    const urlRef = useRef();
    const [show, setShow] = useState(null)
    const [showid, setShowID] = useState(null)
    const deadlineRef = useRef()
    const dunbaavi = 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Black'


    const postRequest = async (e) => {
        e.preventDefault()
        await addDoc(requestsRef, { deletable: true, poster: { name: 'Dunba Tehinse', avi: dunbaavi }, date: new Date(), deadline: new Date(deadlineRef.current.value), url: urlRef.current.value, type: 'Takedown', rqid: uuid(), show: show, showid: showid })
        window.location.reload()
    }

    const selectHandler = (e) => {
        setShow(e.value);
        setShowID(e.showID)
    }



    return (
        <div>
            <form onSubmit={postRequest} method="POST">
                <b>Show:</b>
                <br />
                <Select onChange={(e) => { setShow(e.value); setShowID(e.showID) }} placeholder={'Filter'} options={showList} />
                <br />
                <b>Url</b>
                <br />
                <input type={'text'} ref={urlRef} />
                <br />
                <b>Notes:</b>
                <br />
                <textarea id="hedtextarea" />
                <br />
                <b>Deadline:</b>
                <br />
                <input type="date" ref={deadlineRef} />

                <br />
                <div className="submitdiv">

                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Takedownrequest
