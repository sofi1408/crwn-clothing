import {combineReducers} from 'redux';  
//this is imported to make it root-redducer so that it can handle multiple reducers

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';

export default combineReducers({
    user : userReducer,
    cart : cartReducer
});

//this combine reducer is basically JSON of various reducers where the key represents each user
//like here key for userReducer is user.