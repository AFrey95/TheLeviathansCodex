import { FETCH_BACKGROUNDS, FETCH_BACKGROUND_ONE } from "actions/types";

const backgroundReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_BACKGROUNDS:
      return action.payload || false;
    case FETCH_BACKGROUND_ONE:
      return action.payload || false;
    default:
      return state;
  }
};

export default backgroundReducer;
