import { FETCH_FEATS, FETCH_FEAT_ONE } from "actions/types";

const featReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_FEATS:
      return action.payload || false;
    case FETCH_FEAT_ONE:
      return action.payload || false;
    default:
      return state;
  }
};

export default featReducer;
