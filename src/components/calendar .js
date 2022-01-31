import { React, useEffect, useState, useRef } from "react";
import db from '../firebase-config'
import { collection, getDocs, addDoc } from '@firebase/firestore'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../css/calendar.css";
import RightSideHeader from "./centerheader";


const CalendarPage = () => {
  let calendardate = new Date();
  let [todoDate, setToDoDate] = useState(calendardate);
  const [pastDueArray, setPastDueArray] = useState([])

  ///this section fetches the requestsList from the db
  const [loading, setLoading] = useState(false)
  const reqRef = collection(db, "requestsList");
  const [reqList, setReqList] = useState([]);







  const fetchreqList = async () => {
    setLoading(true)
    const data = await getDocs(reqRef)
    const holderArray = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    const pastDue = holderArray.filter(a => a.deadline.getTime() <= calendardate.getTime())
    setPastDueArray(pastDue)
    setReqList(holderArray)
    setLoading(false)
    console.log(reqList)
  }

  useEffect(() => {
    fetchreqList()
  }, [])





  return (
    <div className='calendardiv' >
      <div>
        <Calendar
          id="bigcalendar"
          onClickDay={value => setToDoDate(value)}
          activeStartDate={todoDate}
        />
      </div>
      <br />

      <div className="duelist">
        <div className="listcontainer">

          Past Due ({pastDueArray.length}) | Due Soon
        </div>
        <br />







      </div>
      <div className="navbottom">
        <RightSideHeader />

      </div>


    </div >
  );
};

export default CalendarPage;
