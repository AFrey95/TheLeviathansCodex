import { FETCH_PROFESSIONS, FETCH_PROFESSION_ONE } from "actions/types";

const professionReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_PROFESSIONS:
      return action.payload || false;
    case FETCH_PROFESSION_ONE:
      return action.payload || false;
    default:
      return state;
  }
};

export default professionReducer;
