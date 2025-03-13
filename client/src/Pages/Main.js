import React from "react";
import './body.css';

const Body = () => {
    return (
        <div className="outer">
            <div className="text-part">
                <h1 className="main-text">Experience the Future Today</h1>
                <h2 className="sub-heading">Discover the future of technology</h2>
                <p className="description">
                    Explore the latest innovations in mobile devices, smartwatches, and laptops.
                    Stay ahead with cutting-edge technology and sleek designs.
                </p>
                <button className="explore-btn" style={{ width: '150px' }}>Explore Now</button>
            </div>
            <div className="img-part"></div>
        </div>
    );
}

export default Body;
