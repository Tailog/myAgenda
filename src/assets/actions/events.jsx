const uuidv4 = require("uuid/v4");

//ADD_Event
export const addEvent = ({
  description = "",
  startDate = 0,
  endDate =0
} = {}) => ({
  type: "ADD_EVENT",
  event: {
    id: uuidv4(),
    description,
    startDate,
    endDate,
  }
});
//REMOVE_Event
export const removeEvent = ({ id } = {}) => ({
  type: "REMOVE_EVENT",
  id: id
});
//EDIT_Event
export const editEvent = (id, updates) => ({
  type: "EDIT_EVENT",
  updates,
  id
});
