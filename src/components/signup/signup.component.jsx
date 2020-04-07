import React from 'react';

import './signup.style.scss';

import FormInput from  '../../components/form-input/form-input.component';

import CustomButton from '../../components/custom-button/custom-button.component';

import {auth,createUserProfileDocument} from '../../firebase/firebase.util';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName : '',
            email: '',
            password : '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
      event.preventDefault();
      const {displayName,email,password,confirmPassword} = this.state;

      if(password !== confirmPassword){
          alert("Passwords don't match..!!");
          return;
      }
      try{
        const {user} = await auth.createUserWithEmailAndPassword(email,password);  //here the user is registered and then we store the user property
        await createUserProfileDocument(user, {displayName});
        this.setState({          //initializing the state again after the set up
            displayName : '',
            email: '',
            password : '',
            confirmPassword: ''
        })
      }
      catch(error){
          console.log("Error signing Up", error.message);
      }
    }

    handleChange = event => {
    const {name,value} = event.target;
    this.setState({[name]:value});
    }
    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                 <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="DISPLAY NAME"
                    required
                 />
                 <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="EMAIL ID"
                    required
                 />
                 <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="PASSWORD"
                    required
                 />
                 <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="CONFIRM PASSWORD"
                    required
                 />
                <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;