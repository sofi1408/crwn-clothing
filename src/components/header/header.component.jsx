import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../../src/assets/crown.svg';

import './header.style.scss';
import { auth } from '../../firebase/firebase.util';

const Header = ({currentUser}) => (
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
        </div>
    </div>
);

const mapStateToProps = state => ({
   currentUser : state.user.currentUser  //this state is the entire state of redux store, we can refer it as root-reducer
});

export default connect(mapStateToProps)(Header);