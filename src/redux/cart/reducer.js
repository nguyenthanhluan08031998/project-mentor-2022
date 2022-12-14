// reducers/todosReducers.js
import * as types from './type';

const initialState = {
    cart: [],
};

export default function reducer(state = initialState, action) { // action: { type, payload}
    switch (action.type) {
        case types.ADD_PRODUCT_TO_CART:
            state.cart.push(action.payload)//
            return { ...state }

        // case types.DeleteProductToCart
        default:
            return state;
    }
}