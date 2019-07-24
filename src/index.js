import React from "react";
import ReactDOM from "react-dom";
// import {Provider} from 'react-redux';
import configureStore from './assets/store/configureStore';
import App from './App.jsx';

const store = configureStore();

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
