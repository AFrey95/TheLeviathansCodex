import { FETCH_ANCESTRIES } from "actions/types";

const ancestriesReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_ANCESTRIES:
      return action.payload || false;
    default:
      return state;
  }
};

export default ancestriesReducer;
