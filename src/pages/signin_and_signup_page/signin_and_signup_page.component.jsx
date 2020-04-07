import React from 'react';
import SignIn from '../../components/SignIn/SignIn.Component';
import SignUp from '../../components/signup/signup.component';

import './signin_and_signup_page.style.scss';

const SignInAndSignupPage = () => (
    <div className='SignInAndSignupPage'>
        <SignIn />
        <SignUp />
    </div>

)

export default SignInAndSignupPage;