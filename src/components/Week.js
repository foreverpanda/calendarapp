import React from 'react';
import Day from './Day.js';

function Week({ startDate }) {
  // Generate dates for the week starting from startDate
  const days = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    days.push(date);
  }

  return (
    <div className="week">
      {days.map((day, index) => (
        <Day key={index} date={day} />
      ))}
    </div>
  );
}

export default Week;