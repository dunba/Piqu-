import { React, useEffect, useState } from "react";
import db from '../firebase-config'
import { collection, getDocs, doc, deleteDoc } from '@firebase/firestore'
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from '@mui/icons-material/Delete';
import Delete from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
const Announcementpopup = ({ isModalOpen, handleModal, setIsModalOpen, announcement }) => {

  const [loading, setLoading] = useState(false)
  const usersRef = collection(db, "userList");
  const [users, setUsers] = useState([])

  const deleteRequest = async (id) => {
    const announcementDoc = doc(db, 'announcements', id)
    await deleteDoc(announcementDoc)
  }

  const fetchUsers = async () => {
    const userdata = await getDocs(usersRef)
    setUsers(userdata.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    console.log(users)
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  const announcementposter = users.filter(user => user.userID2.toString() == announcement.poster.toString())
  console.log(announcementposter)

  return (
    <div className="announcementpopup">
      <div className="openedannouncement">
        <div className="announcementheader">
          <b>Announcement</b>
          <div>
            <CloseIcon id="closeicon" onClick={handleModal} />
          </div>
        </div>


        <div className="announcementposting">

          <div className="announcementpicandinfo">
            <div>


              <img id="announcementavi" src={announcement.poster.avi} />
            </div>
            <div className="announcementheadandname">
              <b>{announcement.head}</b>
              <p> {announcement.poster.name}</p>
              <p>{announcement.time.toDate().toDateString()}</p>
            </div>
          </div>
          <br />

        </div>
        <div className="announcementbody"> {announcement.body}</div>


        <hr />
        <div>
          {/* {announcement.deletable && (<div>
            <DeleteIcon id='editicon' onClick={deleteRequest} />
          </div>)}
          {announcement.editable && (
            <div><EditIcon /></div>
          )} */}
        </div>

      </div>
    </div>
  );
};

export default Announcementpopup;
