import {createSelector} from 'reselect';
import { createSelectorHook } from 'react-redux';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const cartTotalItems = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumatedValue,cartItem) => 
       accumatedValue + cartItem.quantity , 0
    )
)

