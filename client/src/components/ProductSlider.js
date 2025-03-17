import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductSlider.css';
const ProductSlider = () => {
  const products = [
    { id: 1, name: 'iPhone 14', price: '$999', image: '/images/iphone13.png' },
    { id: 2, name: 'Samsung S23', price: '$899', image: '/images/samsung.png' },
    { id: 3, name: 'iphone 16', price: '$1299', image: '/images/iPhone16.png' },
    { id: 4, name: 'Apple Watch 9', price: '$699', image: '/images/watch9s.png' },
    { id:5 , name:' Samasung Airbus' , price :'200$' , image :'/images/galaxy-buds.jpg'}
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container">
      <h2>Featured Products</h2>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div
              className="product-image"
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
