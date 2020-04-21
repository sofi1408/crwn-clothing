import React from 'react';
import './App.css';
import {Switch , Route, Redirect} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignupPage from './pages/signin_and_signup_page/signin_and_signup_page.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import {connect} from 'react-redux';
import {setCurrentUser}  from './redux/user/user-action';
import {selectCurrentUser} from './redux/user/user.selectors';

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
          {/* <Route path='/signin' component={SignInAndSignupPage} /> */}
          <Route exact path='/signin' render={() => this.props.currentUser ?
                       (<Redirect to="/" />) : <SignInAndSignupPage />}  />
          <Route exact path='/checkout' component={CheckoutPage} />            
        </Switch>
      </div>
    )
  }
 
}

//destructuring user from state, also we made this function cz we 
//need user in the redirect otherwise we don't need this.
//before using redirect....
// const mapStateToProps = ({user}) => ({    
//   currentUser : user.currentUser          
// })

const mapStateToProps = (state) => ({    
  currentUser : selectCurrentUser(state)         
})

const mapDispatchToProps = dispatch => ({
   setCurrentUser : user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
