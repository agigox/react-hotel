import {addUser, addToCart} from '../../redux/actionCreators';
import {actionTypes} from '../../redux/actionTypes';
import { expect } from 'chai';


describe('action creators', () => {
    it('should create an action to add a user', () => {
      const expected = {
        name: 'Amine',
        surname: 'TABOU',
        email: 'amin.tabou@gmail.com',
        address: 'Oujda'
      }
      expect(addUser(expected)).to.eql({
          type: actionTypes.ADD_USER,
          playload: {
            name: 'Amine',
            surname: 'TABOU',
            email: 'amin.tabou@gmail.com',
            address: 'Oujda'
          }
      });
    });

    it('should create an action to add a hotel to cart', () => {
        const expected = {
            image: 'image',
            title: 'title',
            description: `description`,
            price: 100
        }
        expect(addToCart(expected)).to.eql({
            type: actionTypes.ADD_TO_CART,
            playload: {
                image: 'image',
                title: 'title',
                description: `description`,
                price: 100
            }
        });
      });
})