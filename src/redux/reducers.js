import { hotels } from '../fixtures/hotels';
import actionTypes from './actionTypes';

const initialState = {
    cart: [],
    hotels,
    currentUser: {}
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
      default: {
        return state;
      }
    }
  };