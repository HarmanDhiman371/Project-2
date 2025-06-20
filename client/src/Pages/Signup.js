import React from 'react';
import "../Styles/Signup.css";

const Signup = () => {
    return (
        <div className="signup-page"> {/* Parent class for scoping */}
            <div className="signup-container">
                <h1 className='signup-heading'>Sign Up</h1>
                <div className="signup-form">
                    <input type="text" placeholder='Name' required />
                    <input type="email" placeholder='Email' required />
                    <input type="password" placeholder='Password' required />
                    <input type="password" placeholder='Confirm Password' required />
                    <button className='signup-button' type='submit'>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
