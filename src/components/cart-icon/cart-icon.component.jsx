import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.style.scss';
import { toggleCartHidden } from '../../redux/cart/cart-action';

import {cartTotalItems} from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartHidden, itemCount}) => (
   <div className="cart-icon"  onClick={toggleCartHidden}>
       <ShoppingIcon className="shopping-icon" />
       <span className="item-count">{itemCount}</span>
   </div>
)

//before using selectors, we used selectors cz without them this will be calculated again and again
// const mapStateToProps = ({cart : {cartItems}}) => ({
//     itemCount : cartItems.reduce(
//         (accumatedValue,cartItem) => 
//        accumatedValue + cartItem.quantity , 0
//     )
// })

const mapStateToProps = (state) => ({
    itemCount : cartTotalItems(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
