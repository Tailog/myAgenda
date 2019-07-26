import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {eventsReducer} from "./../reducers/eventsReducer";
import thunk from "redux-thunk";
// Store creation

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      events: eventsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
