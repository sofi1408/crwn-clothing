import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';

import './cart-dropdown.style.scss';

const CartDropDown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

//before cart selector
// const mapStateToProps = ({cart : {cartItems}}) => ({
//     cartItems
// })

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown);