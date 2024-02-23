import React from "react";

const Event = (props) => {
  return (
    <div className={`Event ${props.color}`}>
      <p>{props.event}</p>
    </div>
  );
};

export default Event;
