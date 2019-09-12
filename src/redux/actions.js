import axios from "axios";
import { FETCH_TOKEN, FETCH_CATEGORIES } from "./actionTypes";


export const fetchToken = () => async dispatch => {
  const res = await axios.get('https://opentdb.com/api_token.php?command=request');
  dispatch({ type: FETCH_TOKEN, payload: res.data });
};


export const fetchCategories = () => async dispatch => {
  const res = await axios.get('https://opentdb.com/api_category.php');
  const { trivia_categories: categories } = res.data;
  dispatch({ type: FETCH_CATEGORIES, payload: categories });
}