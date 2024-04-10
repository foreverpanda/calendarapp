// Calendar.js
import React, { useState } from 'react';
import Week from './Week';

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());

  const goToNextWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() + 7);
    setStartDate(newStartDate);
  };

  const goToPreviousWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() - 7);
    setStartDate(newStartDate);
  };

  return (
    <div className="calendar">
      <h1>Calendar</h1>
      <div>
        <button onClick={goToPreviousWeek}>Previous Week</button>
        <button onClick={goToNextWeek}>Next Week</button>
      </div>
      <Week startDate={startDate} />
    </div>
  );
}

export default Calendar;