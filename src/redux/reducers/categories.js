import { FETCH_CATEGORIES } from '../actionTypes';

const initialState = {
  category: '',
  categories: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_CATEGORIES:
      return action.payload
    default: 
      return state;
  }
}