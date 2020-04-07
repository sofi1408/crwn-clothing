import React from 'react';

import FormInput from  '../../components/form-input/form-input.component';

import CustomButton from '../../components/custom-button/custom-button.component';

import {auth,signInWithGoogle} from '../../firebase/firebase.util';

import './SignIn.style.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email : "",
            password : ""
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {email,password} = this.state;
        try{
          await auth.signInWithEmailAndPassword(email,password);
          this.setState({email: "" , password: ""});
        }
        catch(error){
            console.log("Error signing in", error.message);
        }
        
    }

    handleChange = event =>{
        const {name,value} = event.target;

        this.setState({[name] : value});
    }

    render(){
        return(
           <div className="sign-in">
               <h2>I already have an account</h2>
               <span>Sign In with your email and password</span>

               <form onSubmit={this.handleSubmit}>
                   <FormInput  type="email" 
                           value={this.state.email} 
                           name="email" 
                           handleChange={this.handleChange}
                           label="email"
                           required />
                   <FormInput  type="password"
                               value={this.state.password} 
                               name="password" 
                               handleChange={this.handleChange} 
                               label="password"
                               required />
                   <CustomButton type="submit" name="submit"> Sign In </CustomButton>
                   <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
               </form>
           </div>
        );
    }
}

export default SignIn;