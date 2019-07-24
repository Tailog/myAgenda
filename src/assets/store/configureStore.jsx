import { createStore, combineReducers } from "redux";
import eventsReducer from './../reducers/eventsReducer';
// Store creation

export default () => {
  const store = createStore(
    combineReducers({
      events: eventsReducer,
    })
  );
  return store;
};
