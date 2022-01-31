import { React, useEffect, useState, useRef } from "react";
import db from '../firebase-config'
import { collection, getDocs, addDoc } from '@firebase/firestore'
import CloseIcon from "@mui/icons-material/Close";
import Loading from 'react-loading'

const NewAnnouncement = ({ handleNewAnnouncement, announcement }) => {

    const [loading, setLoading] = useState(false)
    const headRef = useRef();
    const bodyRef = useRef();
    const announcementsRef = collection(db, 'announcements')
    const dunbaavi = 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Black'
    const postAnnouncement = async (e) => {
        e.preventDefault()
        await addDoc(announcementsRef, { head: headRef.current.value, body: bodyRef.current.value, poster: { name: 'Dunba Tehinse', avi: dunbaavi }, time: new Date(), id: announcementsRef.id, deletable: true })
        handleNewAnnouncement();
        window.location.reload()
    }
    return (
        <div className="announcementpopup">
            <div className="openedannouncement">
                <div className="announcementheader">
                    <b>New Announcement</b>
                    <div>
                        <CloseIcon id="closeicon" onClick={handleNewAnnouncement} />
                    </div>
                </div>


                <div >
                    <form onSubmit={postAnnouncement} method="POST">
                        <b>Head</b>
                        <br />
                        <input style={{ width: '23em', height: '1em' }} required ref={headRef} type={'text'} />
                        <br />
                        <b>Body</b>
                        <br />
                        <textarea style={{ width: '23em', height: '5em' }} required ref={bodyRef} type={'text'} />
                        <br />
                        <br />
                        <button >Submit</button>

                    </form>

                </div>



                <hr />

            </div>
        </div>
    );
};

export default NewAnnouncement;
