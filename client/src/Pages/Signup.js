import React from 'react';
import "../Styles/Signup.css";

const Signup = () => {
    return (
        <div className="Signup">
            <div className="signup-container">
                <h1 className='signup-heading'> Sign Up</h1>
                <div className="signup-form">
                     <input type="text"  placeholder='Name' required/>
                      <input type="text"  placeholder='Email required'/>
                    <input type="text"  placeholder='Password' required/>
                    <input type="text"  placeholder='Confirm Password' required/>
                    <button className='signup-button' type='submit'>Signup</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
