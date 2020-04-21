import React from 'react';

import {connect} from 'react-redux';

import './checkout.style.scss';

import {selectCartItems, cartItemsTotalAmount} from '../../redux/cart/cart.selectors';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({cartItems,totalAmt}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />      
            )
        }
        
        <div className='total'>
            TOTAL : ${totalAmt}
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state),
    totalAmt  : cartItemsTotalAmount(state)
});

export default connect(mapStateToProps)(CheckoutPage);