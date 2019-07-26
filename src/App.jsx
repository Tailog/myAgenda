import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchEvents from "./assets/store/fetchEvents";
import {
  getEvents,
  getEventsError,
  getEventsPending
} from "./assets/reducers/eventsReducer";

class App extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { fetchEventsAction } = this.props;
    fetchEventsAction();
  }
  shouldComponentRender() {
    const { pending } = this.props;
    console.log(this.props);
    if (pending === false) {
      console.log("not done");
      return true;
    }
    console.log("done");
    return false;
  }
  render() {
    if (!this.shouldComponentRender()) return <h1>Loading</h1>;
    return <h1>Hello</h1>;
  }
}

const mapStateToProps = state => ({
  error: getEventsError(state),
  events: getEvents(state),
  pending: getEventsPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchEventsAction: fetchEvents
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
