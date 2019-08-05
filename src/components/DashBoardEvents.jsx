import React from "react";
import { connect } from "react-redux";
import { getEvents } from "../assets/reducers/eventsReducer";
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
