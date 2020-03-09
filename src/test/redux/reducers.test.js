import {addToCart, sortHotels} from '../../redux/reducers'
import {actionTypes} from '../../redux/actionTypes'
import {hotels} from '../../fixtures/hotels';
import { expect } from 'chai';

describe('todos reducer', () => {
    
  it('should return the initial state', () => {
    const initR = addToCart(undefined, {});
    const init = {
      cart: [],
      hotels,
      currentUser: {}
    }
    expect(initR).to.eql(init); // fails
  });

  it('should handle ADD_TO_CART', () => {

    const state = {cart: []};
    const action = {
      type: actionTypes.ADD_TO_CART,
      playload: {
        image: 'image',
        title: 'title',
        description: `description`,
        price: 100
    
      }
    }
    expect(addToCart(state, action).cart).to.eql([{
      image: 'image',
      title: 'title',
      description: `description`,
      price: 100
    
    }]);
  });
  it('should handle ADD_USER', () => {

    const state = {cart: [], hotels, currentUser: {}};
    const action = {
      type: actionTypes.ADD_USER,
      playload: {
        name: 'Amine',
        surname: 'TABOU',
        email: 'amin.tabou@gmail.com',
        address: 'Oujda'
      }
    }
    expect(addToCart(state, action)).to.eql({
      cart: [],
      hotels,
      currentUser: {
        name: 'Amine',
        surname: 'TABOU',
        email: 'amin.tabou@gmail.com',
        address: 'Oujda'
      }
    });
  });

  fit('shoud sort hotels by price', () => {
    expect(sortHotels(hotels)).to.eql(hotels);
  })
})