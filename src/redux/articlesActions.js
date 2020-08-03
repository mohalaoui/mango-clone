import { FETCH_ARTICLES } from "./actionsTypes";
import axios from "axios";

const dispatchActicles = () => async (dispatch) => {
  const response = await axios.get("data.json");
  dispatch({ type: FETCH_ARTICLES, payload: response.data });
};

export { dispatchActicles };
