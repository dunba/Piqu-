import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import requestData from "./requestdata";
import { useState } from 'react';


const CalendarPage = () => {
    let calendardate = new Date('January 2, 2022 03:24:00')
    let [todoDate, setToDoDate] = useState(calendardate);
    const datesAreOnSameDay = (first, second) =>
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate();

    console.log(datesAreOnSameDay(calendardate, requestData[1].deadline));

    const dueRequests = requestData.filter(request => (request.deadline = todoDate));
    console.log(requestData)
    console.log(dueRequests)
    return (
        <div>
            <Calendar onClickDay={(value) => setToDoDate(value)} activeStartDate={todoDate} />
            <div>Due on {todoDate.toDateString()}:</div>
            {dueRequests.map(request => (
                <ul key={`${request.linkdata}${request.postID}`}>
                    <li>{request.shorthed}</li>
                </ul>
            ))}
        </div>
    )
}

export default CalendarPage 
