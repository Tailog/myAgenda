import React from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getEvents } from "../assets/reducers/eventsReducer";
import EventItem from "./EventItem";


const DashBoardEvents = (props) => {
  return (
    <div>
    <h2>Here's the events</h2>
        {props.events.map((event)=>{
          return <EventItem key={event.id } {...event}/>
        })}
    </div>
  );
}

// function DashBoardEvents(props){
//   return
//     <div>
//       <Typography>
//         <h2>Here's the events</h2>
//         <h1>{props}</h1>
//       </Typography>
//     </div>
// } 

const mapStateToProps = state => ({
  events: getEvents(state)
});

export default connect(mapStateToProps)(DashBoardEvents);
