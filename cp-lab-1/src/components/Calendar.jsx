import React from "react";

const Calendar = () => {
  return (
    <div className="calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <td>9 am</td>
            <td>10 am</td>
            <td>11 am</td>
            <td>12 pm</td>
            <td>1 pm</td>
            <td>2 pm</td>
            <td>3 pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
