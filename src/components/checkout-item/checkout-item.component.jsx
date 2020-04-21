import React from 'react';

import './checkout-item.style.scss';

import {connect} from 'react-redux';

import {removeItemFromCart} from '../../redux/cart/cart-action';

const CheckOutItem = ({cartItem , removeItem}) => {
    const {name, imageUrl,price,quantity} = cartItem;
    return(
   <div className="checkout-item">
       <div className="image-container">
           <img alt="item" src={imageUrl} />
       </div>
       <div className="name">{name}</div>
       <div className="quantity">{quantity}</div>
       <div className="price">{price}</div>
       <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
   </div>
)}

const mapDispatchToProps = (dispatch) => ({
    removeItem : cartItem => dispatch(removeItemFromCart(cartItem))
})

export default connect(null,mapDispatchToProps)(CheckOutItem);