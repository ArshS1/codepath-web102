import Event from './Event'
import React from "react";

const Calendar = () => {
  const events = [
    { time: '8 am', event: 'Calculus Time', color: 'red' },
    { time: '9 am', event: 'English Time', color: 'yellow' },
    { time: '10 am', event: 'Break Time', color: 'green' },
    { time: '11 am', event: 'Computer Science Time', color: 'pink' },
    { time: '12 pm', event: 'Nap Time', color: 'blue' },
    { time: '1 pm', event: 'Test Review Time', color: 'green' },
  ];

  return (
    <div className="calendar">
      {events.map((event, index) => (
        <div key={index} className="card">
          <h3>{event.time}</h3>
          <Event event={event.event} color={event.color} />
        </div>
      ))}
    </div>
  );
};

export default Calendar;