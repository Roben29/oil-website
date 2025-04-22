import React from 'react';
import './Body.css';

function Body() {
  const products = [
    { name: 'Coconut Oil', price: '₹200', image: 'src/assets/coconut-oil.jpg' },
    { name: 'Groundnut Oil', price: '₹300', image: 'src/assets/groundnut-oil.jpg' },
    { name: 'Sesame Oil', price: '₹400', image: 'src/assets/sesame-oil.jpg' },
    { name: 'Cold Pressed Coconut Oil', price: '₹500', image: 'src/assets/coldpressedcoconut-oil.jpg '},
  ];

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h2>Pure, Natural, and Healthy Oils</h2>
          <p>Experience the essence of nature with every drop.</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="hero-image">
          <img src="src/assets/oils-banner.jpg" alt="Natural Oils" />
        </div>
      </section>

      <section className="featured-section">
        <h3> Products</h3>
        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.price}</p>
             
            </div>
          ))}
        </div>
      </section>

      <section className="special-offers">
        <h3>Special Offers</h3>
        <div className="offer-box">
          <p><strong>🌿 20% OFF</strong> on your first purchase! Use code: <span className="offer-code">NATURAL20</span></p>
          <p><strong>🛒 Buy 2 Get 1 Free</strong> – Limited Time Only!</p>
          <p><strong>🎁 Free Shipping</strong> on orders above $30</p>
        </div>
      </section>
    </>
  );
}

export default Body;
