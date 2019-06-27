import { createStore } from "redux";
import { hotels } from '../fixtures/hotels';


const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART"
}

const initialState = {
  cart: [],
  hotels
};
// Reducer the change the currently displayed actions
const addToCart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.playload.cart]
      }
    }
    default: {
      return state;
    }
  }
};

export default createStore(addToCart);
