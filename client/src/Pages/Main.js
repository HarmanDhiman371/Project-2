import React from "react";
import './body.css';

const Body = () => {
    return (
        <div className="outer">
            <div className="text-part">
                <h1 className="main-text">Step Into the Future</h1>
                <h2 className="sub-heading">Where Innovation Meets Style</h2>
                <p className="description">
                    Discover the latest in mobile technology, smartwatches, and laptops.
                    Experience cutting-edge designs and unparalleled performance.
                </p>
                <button className="explore-btn">Explore Now</button>
            </div>
            <div className="img-part"><img src="https://mcprod.tescomobile.com/media/wysiwyg/handsets/apple/iphone-16/display_small_2x.png?600061f54630" alt="" className="im" /></div>
        </div>
    );
}

export default Body;