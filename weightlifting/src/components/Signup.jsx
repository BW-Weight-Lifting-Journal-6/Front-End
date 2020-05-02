import React from 'react'

import SignUpForm from './SignUpForm';

const Signup = (props) => {
    return(
        <div>

            <SignUpForm
            history={props.history}/>
        </div>
    )
}

export default Signup;