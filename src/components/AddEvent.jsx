import React from "react";
import { connect } from "react-redux";
import EventForm from "./EventForm";

const AddEvent = props => (
  <div>
    <EventForm />
  </div>
);

export default connect()(AddEvent);
