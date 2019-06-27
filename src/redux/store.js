import { createStore } from "redux";
import { hotels } from '../fixtures/hotels';


const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  ADD_USER: "ADD_USER"
}

const initialState = {
  cart: [],
  hotels,
  currentUser: {}
};
// Reducer the change the currently displayed actions
const addToCart = (state = initialState, action) => {
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

export default createStore(addToCart,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
