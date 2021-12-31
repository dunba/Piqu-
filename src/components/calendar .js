import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
    const calendardate = new Date();
    return (
        <div>
            <Calendar activeStartDate={calendardate} />
        </div>
    )
}

export default CalendarPage 
