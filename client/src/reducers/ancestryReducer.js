import { FETCH_ANCESTRIES, FETCH_ANCESTRY_ONE } from "actions/types";

const ancestryReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_ANCESTRIES:
      return action.payload || false;
    case FETCH_ANCESTRY_ONE:
      return action.payload || false;
    default:
      return state;
  }
};

export default ancestryReducer;
