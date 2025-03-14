import React from "react";
import './acessories.css';

const Acessories = () => {
    return (
        <div className="access">
            <div className="first">
                <div className="arjan">
                    <div className="in"></div>
                </div>
            </div>
            <div className="second">
                <h2 className="offer-heading">Special Offers</h2>
                <ul className="offer-list">
                    <li>Get a free one-month Spotify Premium subscription when you buy headphones.</li>
                    <li>Receive a 20% discount on your next accessory purchase.</li>
                    <li>Free shipping on orders over $50.</li>
                </ul>
            </div>
        </div>
    );
}

export default Acessories;
