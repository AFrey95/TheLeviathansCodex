import { POST } from "actions/types";

const postReducer = (state = null, action) => {
  switch (action.type) {
    case POST:
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
