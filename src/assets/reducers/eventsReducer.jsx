//Firebase
// import {firebaseConfig} from '../firebase/config';
// const firebase = require("firebase");
// require("firebase/firestore");


let eventReducerDefaultState = [];


export default (state = eventReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return [...state, action.event];
    case "REMOVE_EVENT":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_EVENT":
      return state.map(e => {
        if (e.id === action.id) {
          return {
            ...e,
            ...action.updates
          };
        } else {
          return e;
        }
      });
    default:
      return state;
  }
};
