import { FETCH_SPELLS, FETCH_SPELL_ONE } from "actions/types";

const spellReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_SPELLS:
      return action.payload || false;
    case FETCH_SPELL_ONE:
      return action.payload || false;
    default:
      return state;
  }
};

export default spellReducer;
