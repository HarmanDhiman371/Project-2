import React, { useState } from 'react';
import "../Styles/Signup.css";

const Signup = () => {
    // State to handle form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Function to handle Signup button click
    const handleSignup = async (e) => {
        e.preventDefault(); // prevent page reload

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/users/signup", { // replace with your backend URL
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message); // shows "Signup successful!" if backend sends this
                // Optionally clear form:
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            } else {
                alert(data.message || "Signup failed!");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert("An error occurred during signup!");
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h1 className='signup-heading'>Sign Up</h1>
                <div className="signup-form">
                    <input
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button
                        className='signup-button'
                        onClick={handleSignup}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
