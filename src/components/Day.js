import React from 'react';

function Day({ date }) {
  return (
    <div className="day">
      <span>{date.toDateString()}</span>
      <input type="checkbox" />
    </div>
  );
}

export default Day;