import React from "react";
import { connect } from "react-redux";
import EventForm from "./EventForm";
import { Redirect } from "react-router-dom";
import { addEventDb } from "../assets/actions/events";

const AddEvent = props => (
  <div>
    <EventForm onSubmit={(event)=>{
      props.dispatch(addEventDb(event));
      // {renderRedirect()}
      props.history.push('/');
    }}/>
  </div>
);

const renderRedirect= ()=>{
  console.log("Hello World");
  
  return <Redirect to='/'/>
}

export default connect()(AddEvent);
