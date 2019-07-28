import React, { Component } from "react";
import { connect } from "react-redux";
import { db } from "../assets/firebase/config.js";
import EventForm from "./EventForm";
import { removeEventDb } from "../assets/actions/events";
import { editEventDb } from "./../assets/actions/events";
import { getEvents } from "../assets/reducers/eventsReducer";
import Loading from "./LoadingScreen";

class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending:true,
      event : null,
      props : this.props
    }
    if (!props.event) {
      db.collection("events")
        .doc(props.match.params.id)
        .get()
        .then(snap => {
          this.setState((prevState)=>({
            pending : false,
            event : {...snap.data(), id: snap.id},
          }))
        });
    } else {
      this.state = {
        pending: false,
        event: this.props.event,
        props: this.props
      };
    }
  }
  render() {
    return (
      this.state.pending ? <Loading/> : <Template {...this.state}/>
    )
  }
}

const Template = props => (
  <div>
    <EventForm
      event={props.event}
      onSubmit={event => {
        props.props.dispatch(editEventDb(props.event.id, event));
        props.props.history.push("/");
      }}
    />
    <button
      onClick={() => {
        props.props.dispatch(removeEventDb(props.event.id));
        props.props.history.push("/");
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
