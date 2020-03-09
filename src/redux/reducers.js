import { hotels } from '../fixtures/hotels';
import {actionTypes} from './actionTypes';


export const sortHotels = (hotels) => {
  const result = hotels.sort((a, b) => (a.price >= b.price) ? 1 : -1)
  return result;
}
const initialState = {
  cart: [],
  hotels,
  currentUser: {},
  loading: false,
  news: []
};
  // Reducer the change the currently displayed actions
  export const addToCart = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ADD_TO_CART: {
        return {
          ...state,
          cart: [...state.cart, action.playload]
        }
      }
  
      case actionTypes.ADD_USER: {
        return {
          ...state,
          currentUser: {...action.playload}
        }
      }

      case 'SORT_HOTELS': {
        const hotels = [...state.hotels];
        return {
          ...state,
          hotels: sortHotels(hotels)
        }
      }
      case 'GET_NEWS': {
        return {
          ...state,
          loading: true
        }
      }
      case 'NEWS_RECEIVED': {
        return {
          ...state,
          loading: false,
          news: action.json
        }
      }
      default: {
        return state;
      }
    }
  };