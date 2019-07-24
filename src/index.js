import React from "react";
import ReactDOM from "react-dom";
// import {Provider} from 'react-redux';
import configureStore from "./assets/store/configureStore";
import * as actions from "./assets/actions/events";
import App from "./App.jsx";

const store = configureStore();

store.dispatch(actions.addEvent({ description: "Hello" }));

console.log(store.getState());

store.dispatch(
  actions.editEvent(store.getState().events[0].id, {
    description: "Hello World"
  })
);

console.log(store.getState());

store.dispatch(actions.removeEvent({ id: store.getState().events[0].id }));

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
