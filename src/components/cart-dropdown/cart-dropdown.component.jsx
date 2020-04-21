import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';

import './cart-dropdown.style.scss';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart-action';

const CartDropDown = ({cartItems,history, dispatch}) => (
    <div className="cart-dropdown">
        {
        cartItems.length > 0 ?
        <div className="cart-items">
        {
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        }
        </div>
        :
        <span className="empty-cart">Your cart is empty</span>
        }
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }
            }>GO TO CHECKOUT</CustomButton>
    </div>
)

//before cart selector
// const mapStateToProps = ({cart : {cartItems}}) => ({
//     cartItems
// })

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));