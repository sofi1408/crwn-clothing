import React from "react";

import './cart-item.style.scss';

const CartItem = ({ item : {name,imageUrl,price,quantity} }) => (
   <div className='cart-item'>
       <img src={imageUrl} alt='item-img'/>
       <div className='item-details'>
           <span className='name'>{name}</span>
           <span className='price'>{quantity} x ${price}</span>
       </div>
   </div>
);

export default CartItem;