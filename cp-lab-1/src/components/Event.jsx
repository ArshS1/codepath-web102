import React from "react";

const Event = (props) => {
  return (
    <div>
      <td className={"Event " + props.color}>
        <p>{props.event}</p>
      </td>
    </div>
  );
};

export default Event;
