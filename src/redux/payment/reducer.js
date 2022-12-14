// reducers/todosReducers.js
import * as types from './type';

const initialState = {
    payment:{},
    news: {}
};

export default function reducer(state = initialState, action) { // action: { type, payload}
    switch (action.type) {
        case types.ADD_PRODUCT_TO_PAYMENT:
            state.cart.push(action.payload)//
            return { ...state }

        // case types.DeleteProductToCart
        default:
            return state;
    }
}