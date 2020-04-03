import React from 'react';
import './App.css';
import {Switch , Route} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignupPage from './pages/signin_and_signup_page/signin_and_signup_page.component';
import Header from './components/header/header.component'
import { auth } from './firebase/firebase.util'


class App extends React.Component {
constructor(){
  super();

  this.state = {
    currentUser : null
  }
}

unSubscribeFromAuth = null;

 componentDidMount(){
   this.unSubscribeFromAuth = auth.onAuthStateChanged ( user => {
       this.setState({currentUser: user});

       console.log(this.state.currentUser);
   } )
 }

 componentWillUnmount(){
   this.unSubscribeFromAuth();   //to close the subscription opened during component will Mount.
                                 // normally we just use the auth.SignOut() method to sign user out
 }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignupPage} />
        </Switch>
      </div>
    )
  }
 
}

export default App;
