import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MobilePage.css';

const MobilePage = () => {
  // Banner images
  const bannerImages = [
    "/images/banner4.jpg",
    "/images/banner2.jpg",
    "/images/banner6.jpg",
  ];

  // Product data
  const iphoneProducts = [
    { id: 1, name: 'iPhone 14', price: '$999', image: '/images/iphone14.jpg' },
    { id: 2, name: 'iPhone 15', price: '$1099', image: '/images/iphone15.jpg' },
    { id: 3, name: 'iPhone 16', price: '$1299', image: '/images/iphone_16.jpg' },
    { id: 4, name: 'iPhone 16pro', price: '$1699', image: '/images/iphone_16pro.jpg' },
  ];

  const samsungProducts = [
    { id: 1, name: 'Samsung S23', price: '$899', image: '/images/samsung-s23.png' },
    { id: 2, name: 'Samsung Z Fold', price: '$1799', image: '/images/samasun-fold4.png' },
    { id: 3, name: 'Samsung A54', price: '$499', image: '/images/Samsung-A54.jpg' },
  ];

  const vivoProducts = [
    { id: 1, name: 'Vivo V29pro', price: '$799', image: '/images/vivo-v29pro.jpg' },
    { id: 2, name: 'Vivo X200pro', price: '$599', image: '/images/vivo-x200pro.jpg' },
    { id: 3, name: 'Vivo T5 5G', price: '$299', image: '/images/vivo-T5.jpg' },
  ];

  const allProducts = [...iphoneProducts, ...samsungProducts, ...vivoProducts];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Banner slider settings
  const bannerSettings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true, // Smooth transition effect
  };

  return (
    <div className="mobile-page">
      {/* Banner Image Slider */}
      <div className="banner-slider">
        <Slider {...bannerSettings}>
          {bannerImages.map((image, index) => (
            <div key={index} className="banner-slide">
              <img src={image} alt={`Slide ${index + 1}`} className="banner-image" />
            </div>
          ))}
        </Slider>
      </div>

      {/* iPhone Slider */}
      <section className="slider-section">
        <h2>iPhone Collection</h2>
        <Slider {...sliderSettings}>
          {iphoneProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Samsung Slider */}
      <section className="slider-section">
        <h2>Samsung Collection</h2>
        <Slider {...sliderSettings}>
          {samsungProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Vivo Slider */}
      <section className="slider-section">
        <h2>Vivo Collection</h2>
        <Slider {...sliderSettings}>
          {vivoProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* All Products Slider */}
      <section className="slider-section">
        <h2>All Products</h2>
        <Slider {...sliderSettings}>
          {allProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default MobilePage;
