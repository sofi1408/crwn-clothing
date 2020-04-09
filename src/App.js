import React from 'react';
import './App.css';
import {Switch , Route} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignupPage from './pages/signin_and_signup_page/signin_and_signup_page.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import {connect} from 'react-redux';
import {setCurrentUser}  from './redux/user/user-action'

class App extends React.Component {
constructor(){
  super();

  //this was used before redux state, now we don't need this
  // this.state = {
  //   currentUser : null
  // }
}

unSubscribeFromAuth = null;

 componentDidMount(){
   const {setCurrentUser} = this.props;
   this.unSubscribeFromAuth = auth.onAuthStateChanged (async userAuth => {
       if(userAuth){
         const userRef = await createUserProfileDocument(userAuth);
         userRef.onSnapshot( snapshot =>
          // this.props.state({   --used before using redux state
            setCurrentUser({
            currentUser : {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
          
         )
       }
       //used before redux state
      // this.setState({currentUser: userAuth});   //this is bcz if userAuth doesn't exist we want currentUser to be null
      setCurrentUser({currentUser: userAuth});
   } )
 }

 componentWillUnmount(){
   this.unSubscribeFromAuth();   //to close the subscription opened during component will Mount.
                                 // normally we just use the auth.SignOut() method to sign user out
 }
  render(){
    //previously Header was passed as <Header currentUser={this.state.currentUser} />
    //but now we are fetching the currentuser from redux state directly into the header component
    //so we don't need to pass current user from here.
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignupPage} />
        </Switch>
      </div>
    )
  }
 
}

const mapDispatchToProps = dispatch => ({
   setCurrentUser : user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);
