import React from 'react';

import './checkout-item.style.scss';

import {connect} from 'react-redux';

import {deleteItemFromCart,addItem,removeItem} from '../../redux/cart/cart-action';

const CheckOutItem = ({cartItem , deleteItem, addItem, removeItem}) => {
    const {name, imageUrl,price,quantity} = cartItem;
    return(
   <div className="checkout-item">
       <div className="image-container">
           <img alt="item" src={imageUrl} />
       </div>
       <div className="name">{name}</div>
       <div className="quantity">
           <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
           <span className="value">{quantity}</span>
           <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
       </div>
       <div className="price">{price}</div>
       <div className="remove-button" onClick={() => deleteItem(cartItem)}>&#10005;</div>
   </div>
)}

const mapDispatchToProps = (dispatch) => ({
    deleteItem : cartItem => dispatch(deleteItemFromCart(cartItem)),
    addItem : cartItem => dispatch(addItem(cartItem)),  
    removeItem : cartItem => dispatch(removeItem(cartItem)),  
})

export default connect(null,mapDispatchToProps)(CheckOutItem);