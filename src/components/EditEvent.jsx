import React from "react";
import { connect } from "react-redux";
import EventForm from "./EventForm";
import { removeEventDb } from "../assets/actions/events";
import { editEventDb } from "./../assets/actions/events";
import { getEvents } from "../assets/reducers/eventsReducer";

const EditEvent = props => (
  <div>
    <EventForm
      event={props.event}
      onSubmit={event => {
        props.dispatch(editEventDb(props.event.id, event));
        props.history.push("/");
      }}
    />
    <button
      onClick={() => {
        props.dispatch(removeEventDb(props.event.id));
        props.history.push("/");
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    event: getEvents(state).find(event => {
      return event.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditEvent);
