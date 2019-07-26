import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./assets/store/configureStore";
import AppRouter from "./assets/routes/AppRoute.jsx";

//Font
import "typeface-roboto";
import Typography from "@material-ui/core/Typography";

//Create Store
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Typography>
      <AppRouter />
    </Typography>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
