import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../../src/assets/crown.svg';
import {cartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import './header.style.scss';
import { auth } from '../../firebase/firebase.util';

const Header = ({currentUser,hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {
                currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                : 
                <Link className="option" to="/signin">SIGN IN</Link> 
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropDown />
        }
        
    </div>
);

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    hidden : cartHidden(state)
});

export default connect(mapStateToProps)(Header);