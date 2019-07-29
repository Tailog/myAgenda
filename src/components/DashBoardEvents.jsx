import React from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getEvents } from "../assets/reducers/eventsReducer";
import EventItem from "./EventItem";
import HeaderNav from './HeaderNav'

const DashBoardEvents = (props) => {
  return (
    <div></div>
  )
}


const mapStateToProps = state => ({
  events: getEvents(state)
});

export default connect(mapStateToProps)(DashBoardEvents);
