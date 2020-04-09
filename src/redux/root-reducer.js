import {combineReducers} from 'redux';  
//this is imported to make it root-redducer so that it can handle multiple reducers

import userReducer from './user/user-reducer';

export default combineReducers({
    user : userReducer
});

//this combine reducer is basically JSON of various reducers where the key represents eaxh user
//like here key for userReducer is user.