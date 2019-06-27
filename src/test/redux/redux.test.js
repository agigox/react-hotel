import addToCart from '../../redux/reducers'
import actionTypes from '../../redux/actionTypes'
import hotels from '../../fixtures/hotels';
import { expect } from 'chai';


describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(addToCart(undefined, {})).to.equal({
            cart: [],
            hotels,
            currentUser: {}
        })
    });
/*
  it('should handle ADD_TODO', () => {
    expect(
      reducer([], {
        type: types.ADD_TODO,
        text: 'Run the tests'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: types.ADD_TODO,
          text: 'Run the tests'
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })
  */
})