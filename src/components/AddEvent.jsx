import React from "react";
import { connect } from "react-redux";
import EventForm from "./EventForm";
import { addEventDb } from "../assets/actions/events";

const AddEvent = props => (
  <div>
    <EventForm onSubmit={(event)=>{
      props.dispatch(addEventDb(event));
      props.history.push('/');
    }}/>
  </div>
);

export default connect()(AddEvent);
