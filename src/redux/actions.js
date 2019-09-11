import axios from "axios";
import { FETCH_TOKEN } from "./actionTypes";

export const fetchToken = () => async dispatch => {
  const res = await axios.get('https://opentdb.com/api_token.php?command=request');
  dispatch({ type: FETCH_TOKEN, payload: res.data })
};
