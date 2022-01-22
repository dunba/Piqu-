import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/calendar.css";
import requestData from '../dummy data/requestdata'

const CalendarPage = () => {
  const [totalrequests, setTotalRequests] = useState(5)
  let calendardate = new Date();
  let [todoDate, setToDoDate] = useState(calendardate);
  const datesAreOnSameDay = (first, second) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

  const alldueRequests = requestData.filter(request =>
    datesAreOnSameDay(request.deadline, todoDate)
  );
  const dueRequests = alldueRequests.slice(0, totalrequests)
  console.log(requestData);
  console.log(dueRequests);

  const [isReqsExpanded, setIsReqsExpanded] = useState(false)
  const handleRequestExpander = () => {
    if (!isReqsExpanded) { setIsReqsExpanded(true); setTotalRequests(alldueRequests.length) } else { setIsReqsExpanded(false); setTotalRequests(5) };
  }
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

          Due{" "}
          {datesAreOnSameDay(calendardate, todoDate)
            ? "Today"
            : `on ${todoDate.toDateString()} `} ({alldueRequests.length})
        </div>
        {dueRequests.map(request => (
          <NavLink style={{ color: 'inherit', textDecoration: "none" }} to={`/requests/${request.rqid}`}>

            <ul className="duerequest" >
              <li>{request.type} - {request.senderName}
              </li>


            </ul></NavLink>
        ))}


        {dueRequests.length == 0 ? <div><br />No requests</div> :
          <div>
            {!isReqsExpanded && (<p onClick={handleRequestExpander}>See More</p>)}
            {isReqsExpanded && (<p onClick={handleRequestExpander}>See Less</p>)}
          </div>

        }

      </div>


    </div >
  );
};

export default CalendarPage;
