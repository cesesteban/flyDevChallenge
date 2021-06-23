import axios from "axios";

export const GET_EPISODES = "GET_EPISODES";

export const getEpisodes = (value) => (dispatch) => {
  let URL = `https://rickandmortyapi.com/api/episode/?name=${value}`;
  axios
    .get(URL)
    .then((res) => {
      dispatch({ type: "GET_EPISODES", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "GET_EPISODES", payload: "error" });
    });
};
