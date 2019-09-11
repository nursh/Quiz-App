import { FETCH_TOKEN } from '../actionTypes';

export default function (state = null, action) {
  switch(action.type) {
    case FETCH_TOKEN:
      return action.payload;
    default: 
      return state;
  }
}