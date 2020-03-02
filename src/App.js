import React from 'react';
import './App.css';
import {Switch , Route} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignupPage from './pages/signin_and_signup_page/signin_and_signup_page.component';
import Header from './components/header/header.component'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignupPage} />
      </Switch>
    </div>
  );
}

export default App;
