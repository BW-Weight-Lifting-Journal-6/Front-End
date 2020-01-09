import React from 'react'

import SignUpForm from '../components/SignupForm';

const Signup = (props) => {
    return(
        <div>
          
            <SignUpForm
            history={props.history}/>
        </div>
    )
}

export default Signup;