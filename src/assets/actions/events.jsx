import { db } from "./../firebase/config";

/********SETUP EVENTS WITH STORE***********/
export const fetchEventsPending = () => {
  return {
    type: "FETCH_EVENTS_PENDING"
  };
};
export const fetchEventsSuccess = events => {
  return {
    type: "FETCH_EVENTS_SUCCESS",
    events: events
  };
};
export const fetchEventsError = error => {
  return {
    type: "FETCH_EVENTS_ERROR",
    error: error
  };
};
/***********************************/
/******** ACTIONS EVENTS **********/
//ADD_Event State
export const addEvent = ({
  id,
  description = "",
  startDate = 0,
  endDate = 0
} = {}) => ({
  type: "ADD_EVENT",
  event: {
    id,
    description,
    startDate,
    endDate
  }
});
//ADD_Event DB
export const addEventDb = ({description = "",startDate=0,endDate=0}) => {
  let eventData = {
    description,
    startDate,
    endDate
  }
  return dispatch => {
    db.collection("events")
      .add(eventData)
      // .then(snap => {
      //   let id = snap.id;
      //   dispatch(addEvent({ ...eventData, id }));
      // });
  };
};

//REMOVE_Event
export const removeEvent = ({ id } = {}) => ({
  type: "REMOVE_EVENT",
  id: id
});
//REMOVE_Event DB
export const removeEventDb = id => {
  return dispatch => {
    db.collection("events")
      .doc(id)
      .delete()
      .then(() => {
        dispatch(removeEvent({ id }));
      });
  };
};
//EDIT_Event
export const editEvent = (id, updates) => ({
  type: "EDIT_EVENT",
  updates,
  id
});
//EDIT_EVENT DB
export const editEventDb = (id, updates) => {
  return dispatch => {
    db.collection("events")
      .doc(id)
      .update(updates)
      .then(() => {
        dispatch(editEvent(id, updates));
      });
  };
};
//GET EVENT BY ID
// export const getEventById = (id) =>{
//   return dispatch =>{
//     db.collection("events")
//       .doc(props.match.params.id)
//       .get()
//       .then(snap => {
//         return snap.data();
//       });
//   }
// }
/***********************************/
