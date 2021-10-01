import { FETCH_RETAINERS, FETCH_RETAINER_ONE } from "actions/types";

const retainerReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_RETAINERS:
      return action.payload || false;
    case FETCH_RETAINER_ONE:
      return action.payload || false;
    default:
      return state;
  }
};

export default retainerReducer;
