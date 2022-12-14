// actions/TodoActions.js
import * as types from './type';

export function addProductToCart(payload) {// payload : du lieu, product
    return {
        type: types.ADD_PRODUCT_TO_CART,
        payload// payload: payload
    };
}