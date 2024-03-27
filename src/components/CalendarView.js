// CalendarView.js
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarView = ({ events, onSelectDate }) => {
  return (
    <div>
      <h2>Calendar Section</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={onSelectDate}
        style={{ height: 500 }}
      />
    </div>
  );
};

export default CalendarView;
