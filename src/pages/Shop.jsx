import React, { useState } from 'react';
import CategoryFilter from "../components/CategoryFilter/CategoryFilter.jsx";
import ProductCard from "../components/ProductCard/ProductCard.jsx";
import SortOptions from "../components/SortOptions/SortOptions.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';   
 // Assuming you have a CSS file for styling    

const productsData = [
  { id: 1, name: 'Coconut Oil', price: '₹200', category: 'Coconut', image: 'src/assets/coconut-oil.jpg' },
  { id: 2, name: 'Groundnut Oil', price: '₹300', category: 'Groundnut', image: 'src/assets/groundnut-oil.jpg' },
  { id: 3, name: 'Sesame Oil', price: '₹400', category: 'Sesame', image: 'src/assets/sesame-oil.jpg' },
  { id: 4, name: 'Cold Pressed Coconut Oil', price: '₹500', category: 'Coconut', image: 'src/assets/coldpressedcoconut-oil.jpg '},
];

function Shop() {
  const [category, setCategory] = useState('All');
  const [sortOption, setSortOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  let filteredProducts = productsData.filter((product) =>
    (category === 'All' || product.category === category) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortOption === 'price-asc') {
    filteredProducts.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
  } else if (sortOption === 'price-desc') {
    filteredProducts.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
  }

  return (
    <div className="shop-page">
        <Header />
      <h2>Shop Our Oils</h2>
      <SearchBar onSearch={setSearchTerm} />
      <CategoryFilter onSelectCategory={setCategory} />
      <SortOptions onSortChange={setSortOption} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
        <div className="special-offers">
        <div className="offer-box">
            <h3>Special Offers</h3>
            <p><strong>🌿 20% OFF</strong> on your first purchase! Use code: <span className="offer-code">NATURAL20</span></p>
            <p><strong>🛒 Buy 2 Get 1 Free</strong> – Limited Time Only!</p>
            <p><strong>🎁 Free Shipping</strong> on orders above $30</p>
            </div>
            </div>
        <Footer />
    </div>
  );
}

export default Shop;