import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import requestData from "./requestdata";
import { useState } from "react";
import "../css/calendar.css";

const CalendarPage = () => {
  let calendardate = new Date();
  let [todoDate, setToDoDate] = useState(calendardate);
  const datesAreOnSameDay = (first, second) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

  const dueRequests = requestData.filter(request =>
    datesAreOnSameDay(request.deadline, todoDate)
  );
  console.log(requestData);
  console.log(dueRequests);
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
      <div>

        Due{" "}
        {datesAreOnSameDay(calendardate, todoDate)
          ? "Today"
          : `on ${todoDate.toDateString()} `} ({dueRequests.length})
      </div>
      <div className="duelist">
        {dueRequests.map(request => (
          <ul>
            <li key={`${request.linkdata}${request.postID}`}>
              {request.shorthed}
            </li>
          </ul>
        ))}

      </div>

    </div >
  );
};

export default CalendarPage;
