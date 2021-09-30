import { FETCH_CLASSES, FETCH_CLASS_ONE } from "actions/types";

const classReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_CLASSES:
      return action.payload || false;
    case FETCH_CLASS_ONE:
      return action.payload || false;
    default:
      return state;
  }
};

export default classReducer;
