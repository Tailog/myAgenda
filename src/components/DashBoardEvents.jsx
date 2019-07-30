import React from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getEvents } from "../assets/reducers/eventsReducer";
import EventItem from "./EventItem";
import HeaderNav from './HeaderNav';
import MyCalendar from './MyCalendar';

const DashBoardEvents = (props) => {
  return (
    <div>
      <MyCalendar/>
    </div>
  )
}


const mapStateToProps = state => ({
  events: getEvents(state)
});

export default connect(mapStateToProps)(DashBoardEvents);
