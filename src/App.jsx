import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchEvents from "./assets/store/fetchEvents";
import {
  getEvents,
  getEventsError,
  getEventsPending
} from "./assets/reducers/eventsReducer";
//Styles Component
import Loading from './components/LoadingScreen';
//Component
import DashBoardEvents from './components/DashBoardEvents'

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
    if (pending === false) {
      return true;
    }
    return false;
  }
  render() {
    if (!this.shouldComponentRender()) return <Loading/>;
    return <DashBoardEvents/>;
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
