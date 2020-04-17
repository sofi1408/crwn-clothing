import {CartActionTypes} from './cart-types';
import {addItemToCart} from './cart-utility';

const INTIAL_STATE = {
    hidden: true,
    cartItems : []
};

const cartReducer = (state=INTIAL_STATE, action) => {
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN :
           return{ 
            ...state,
            hidden : !state.hidden
           };
        case CartActionTypes.ADD_ITEMS_TO_CART : 
           return{
               ...state,
               cartItems : addItemToCart(state.cartItems,action.payload)
           }
        default : return state;
    }
}
export default cartReducer;