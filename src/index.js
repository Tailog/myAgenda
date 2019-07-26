import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import configureStore from "./assets/store/configureStore";
import App from "./App.jsx";


//Create Store
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("root"));
