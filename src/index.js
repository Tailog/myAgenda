import React from "react";
import ReactDOM from "react-dom";
// import {Provider} from 'react-redux';
import configureStore from "./assets/store/configureStore";
import * as actions from "./assets/actions/events";
import App from "./App.jsx";
import {getData} from "./assets/firebase/config";


const store = configureStore();

getData(store,actions);

const event1 = {
  description: "Event 1",
  startDate: 0,
  endDate: 15
};
const event2 = {
  description: "Event 2",
  startDate: 15,
  endDate: 25
};
setTimeout(() => {
  console.log(store.getState());
}, 4000);

//TESTING
setTimeout(()=>{
  // store.dispatch(actions.removeEventDb("a3r1V19olNOxdyDS0g4E"));
  // store.dispatch(actions.addEventDb(event1));
  store.dispatch(actions.editEventDb("HJYYecuSK2IjPUdAUkRr",{description:"Caca",startDate:250}));
},2000)

// console.log(store.getState());

// store.dispatch(
//   actions.editEvent(store.getState().events[0].id, {
//     description: "Hello World"
//   })
// );

// console.log(store.getState());

// store.dispatch(actions.removeEvent({ id: store.getState().events[0].id }));

// console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
