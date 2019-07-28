let eventReducerDefaultState = {
  pending: false,
  events: [],
  error: null
};

export const eventsReducer = (state = eventReducerDefaultState, action) => {
  switch (action.type) {
    //*****SETUP STATE WITH DB ACTIONS ****//
    case "FETCH_EVENTS_PENDING":
      return {
        ...state,
        pending: true
      };
    case "FETCH_EVENTS_SUCCESS":
      return {
        ...state,
        events: action.events,
        pending: false
      };
    case "FETCH_EVENTS_ERROR":
      return {
        ...state,
        pending: false,
        error: action.error
      };
    //******EVENTS ACTIONS *******//
    case "ADD_EVENT":
      return {
        ...state,
        events: [...state.events, action.event]
      };
    case "REMOVE_EVENT":
      let eventsModifiedRemove = state.events.filter(({ id }) => {
        return id !== action.id;
      });
      return {
        ...state,
        events:eventsModifiedRemove
      }
    case "EDIT_EVENT":
      let eventsModifiedEdit = state.events
      .map(e => {
        if (e.id === action.id) {
          return {
            ...e,
            ...action.updates
          };
        } else {
          return e;
        }
      });
      return {
        ...state,
        events:eventsModifiedEdit
      }
    default:
      return state;
  }
};

export const getEvents = state => state.events.events;
export const getEventsPending = state => state.events.pending;
export const getEventsError = state => state.events.error;
