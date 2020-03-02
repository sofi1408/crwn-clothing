import React from 'react';

import FormInput from  '../../components/form-input/form-input.component';

import CustomButton from '../../components/custom-button/custom-button.component';

import './SignIn.style.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email : "",
            password : ""
        }
    }

    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email: "" , password: ""});
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
                   <CustomButton type="submit" name="submit"> Submit Form </CustomButton>
               </form>
           </div>
        );
    }
}

export default SignIn;