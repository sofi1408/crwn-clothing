import {combineReducers} from 'redux';  
//this is imported to make it root-redducer so that it can handle multiple reducers

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';

const persistConfig = {
  key : 'root',
  storage,
  whitelist : ['cart']   //the reducers that we wanna persist, since user is already handled by firebase, so we need to store the state of cart only
}


//to change cz of persist
// export default combineReducers({
//     user : userReducer,
//     cart : cartReducer
// });

const rootReducer = combineReducers({
        user : userReducer,
        cart : cartReducer
});

export default persistReducer(persistConfig,rootReducer);

//this combine reducer is basically JSON of various reducers where the key represents each user
//like here key for userReducer is user.