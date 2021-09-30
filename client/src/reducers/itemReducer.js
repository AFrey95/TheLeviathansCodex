import { FETCH_ITEMS, FETCH_ITEM_ONE } from "actions/types";

const itemReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return action.payload || false;
    case FETCH_ITEM_ONE:
      return action.payload || false;
    default:
      return state;
  }
};

export default itemReducer;
