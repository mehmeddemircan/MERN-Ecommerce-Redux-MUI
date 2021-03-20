import { applyMiddleware,createStore,combineReducers } from "redux";

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productCreateReviewReducer, productDetailsReducer, productListReducer} from './reducers/productReducer'
import {cartReducer} from './reducers/cartReducer'
import {authReducer, userDetailsReducer, updateUserProfileReducer} from './reducers/userReducer'

const reducer = combineReducers({
    productList : productListReducer,
    productDetails :productDetailsReducer,
    cart : cartReducer,
    auth : authReducer,
    userDetails : userDetailsReducer,
    updateUserProfile : updateUserProfileReducer,
    productCreateReview : productCreateReviewReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []


const  INITIAL_STATE = {
    cart : {
        cartItems: cartItemsFromStorage
    },
   
}
const middleware =[thunk]

const store = createStore(reducer,INITIAL_STATE,composeWithDevTools(applyMiddleware(...middleware)))

export default store