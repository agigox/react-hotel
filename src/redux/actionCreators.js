import {actionTypes} from './actionTypes'
export const addUser = (data) => ({
    type: actionTypes.ADD_USER,
    playload: data
});
export const addToCart = (data) => ({
    type: actionTypes.ADD_TO_CART,
    playload: data
});