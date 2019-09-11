import { combineReducers } from "redux";
import token from './token';
import categories from './categories';


export default combineReducers({
  token,
  categories
});
