import { createStore, combineReducers, applyMiddleware} from "redux";
import eventsReducer from './../reducers/eventsReducer';
import thunk from 'redux-thunk'
// Store creation

export default () => {
  const store = createStore(
    combineReducers({
      events: eventsReducer,
    }),
    {},
    applyMiddleware(thunk)
  );
  return store;
};
