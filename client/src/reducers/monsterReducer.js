import { FETCH_MONSTERS, FETCH_MONSTER_ONE } from "actions/types";

const monsterReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_MONSTERS:
      return action.payload || false;
    case FETCH_MONSTER_ONE:
      return action.payload || false;
    default:
      return state;
  }
};

export default monsterReducer;
