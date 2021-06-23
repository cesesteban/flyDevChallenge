import { GET_EPISODES } from "./action";

const initialState = {
  episodes: "",
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_EPISODES) {
    return {
      episodes: action.payload,
    };
  }
  return state;
}

export default rootReducer;
