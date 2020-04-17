import React from 'react';

import './collection-items.style.scss';

import {connect}  from 'react-redux';

import {addItem} from '../../redux/cart/cart-action';

import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({item, addItem}) => {
const {name,imageUrl,price} = item;
return(
  <div className="collection-item">
      <div className="image" style={{
          backgroundImage: `url(${imageUrl})`
      }}></div>
      <div className="collection-footer">
    <span className="name">{name}</span>
    <span className="price">{price}</span>
      </div>
    <CustomButton onClick={()=> addItem(item)} inverted>ADD TO CART</CustomButton>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  addItem : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);