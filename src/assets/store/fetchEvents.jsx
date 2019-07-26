import * as actions from '../actions/events'
import {db} from './../firebase/config'


export default () => {
  return (dispatch) =>{
    dispatch(actions.fetchEventsPending());
      db.collection("events")
        .get()
        .then((snap)=>{
          let tabEvents=[]
          snap.forEach((doc)=>{
            let id = doc.id;
            let defaultEvent = doc.data();
            defaultEvent = {
              ...defaultEvent,
              id
            }
            tabEvents = [...tabEvents,defaultEvent]
          })
          dispatch(actions.fetchEventsSuccess(tabEvents));
        })
        .catch(()=>{
          dispatch(actions.fetchEventsError("Fetching Failed"))
        })
  }
}