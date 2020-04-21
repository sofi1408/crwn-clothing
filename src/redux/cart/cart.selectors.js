import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const cartHidden = createSelector(
    [selectCart],
    cart=> cart.hidden
)
export const cartTotalItems = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumatedValue,cartItem) => 
       accumatedValue + cartItem.quantity , 0
    )
)

export const cartItemsTotalAmount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumatedValue,cartItem) => 
       accumatedValue + cartItem.quantity * cartItem.price , 0
    )
)

