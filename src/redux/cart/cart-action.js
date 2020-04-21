import {CartActionTypes} from './cart-types';

export const toggleCartHidden = () => ({
    type : CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type : CartActionTypes.ADD_ITEMS_TO_CART,
    payload : item
})

export const removeItemFromCart = item => ({
    type : CartActionTypes.DELETE_ITEM_FROM_CART,
    payload : item
})