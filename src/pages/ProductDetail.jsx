// src/pages/ProductDetail.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import './ProductDetail.css';
import coconutOil from '../assets/coconut-oil.jpg';
import groundnutOil from '../assets/groundnut-oil.jpg';
import sesameOil from '../assets/sesame-oil.jpg';
import coldPressedCoconut from '../assets/coldpressedcoconut-oil.jpg';

const productsData = [
  { id: 1, name: 'Coconut Oil', price: 200, category: 'Coconut', image: coconutOil, description: 'Pure cold-pressed coconut oil perfect for hair and skin.' },
  { id: 2, name: 'Groundnut Oil', price: 300, category: 'Groundnut', image: groundnutOil, description: 'Rich in flavor and nutrients, great for cooking.' },
  { id: 3, name: 'Sesame Oil', price: 400, category: 'Sesame', image: sesameOil, description: 'Aromatic sesame oil for traditional wellness.' },
  { id: 4, name: 'Cold Pressed Coconut Oil', price: 500, category: 'Coconut', image: coldPressedCoconut, description: 'High-quality, cold-pressed coconut oil for multipurpose use.' },
];


function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail-page">
      <Header />
      <div className="product-detail">
        <img src={product.image} alt={product.name} className="detail-image" />
        <div className="detail-info">
          <h2>{product.name}</h2>
          <p>₹{product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
