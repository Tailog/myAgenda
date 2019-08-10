import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { db } from "../assets/firebase/config";

const EventItem = props => {
  let startDay = moment(props.startDate).startOf("day").unix();
  let endDay = moment(props.startDate).endOf("day").unix();
  let events = []
  // startDay<=startDay<=endDay
  var eventsRef = db.collection("events");
  var query = eventsRef.where("startDate", ">=", startDay).where("startDate","<=",endDay);
  query
    .get()
    .then(snapShot => {
      snapShot.forEach(doc => {
        events.push(doc.data());
      });
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
  return <div>{events}</div>;
};

// <div>
//       <Link to={`/edit/${id}`}>
//         <h3>{description}</h3>
//       </Link>
//       <p>
//         {moment.unix(startDate).format("DD-MM-YY")}
//         -----{moment.unix(endDate).format("DD-MM-YY")}
//       </p>
//     </div>

export default EventItem;
