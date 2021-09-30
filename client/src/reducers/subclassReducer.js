import { FETCH_SUBCLASSES, FETCH_SUBCLASS_ONE } from "actions/types";

const subclassReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_SUBCLASSES:
      return action.payload || false;
    case FETCH_SUBCLASS_ONE:
      return action.payload || false;
    default:
      return state;
  }
};

export default subclassReducer;
