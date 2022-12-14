import { createStore, applyMiddleware , combineReducers} from "redux";
import rootReducerCart from "./cart/reducer";
import rootReducerPayment from "./payment/reducer";
import thunk from 'redux-thunk'; //import thunk

export default function configureStore() {
    const rootReducer = combineReducers({rootReducerCart, rootReducerPayment})// {rootReducerCart: rootReducerCart, rootReducerPayment: rootReducerPayment}

    let store = createStore(rootReducer, applyMiddleware(thunk)) // create store sử dụng thunk
    return store
}