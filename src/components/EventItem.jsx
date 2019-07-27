import React from "react";
// import { Link } from "react-router-dom";
import moment from "moment";

const EventItem = ({ description, startDate, endDate }) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>
        {moment.unix(startDate).format("DD-MM-YY")}
        -----{moment.unix(endDate).format("DD-MM-YY")}
      </p>
    </div>
  );
};


export default EventItem;
