import { FETCH_MECHANICS, FETCH_MECHANIC_ONE } from "actions/types";

const mechanicReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_MECHANICS:
      return action.payload || false;
    case FETCH_MECHANIC_ONE:
      return action.payload || false;
    default:
      return state;
  }
};

export default mechanicReducer;
