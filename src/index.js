import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./assets/store/configureStore";
import AppRouter from "./assets/routes/AppRoute.jsx";

//Font
import "typeface-roboto";
//Style
import "./assets/style/css/App.css"


//Create Store
const store = configureStore();

const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
