// src/pages/Cart.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import './Cart.css';

function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const [coupon, setCoupon] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = coupon === 'NATURAL20' ? subtotal * 0.2 : 0;
  const total = subtotal - discount;

  const placeOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div className="cart-page">
      <Header />
      <div className="cart-container">
        <h2>Your Cart</h2>

        {!orderPlaced ? (
          <>
          <div className="cart-items">
  {cartItems.map((item) => (
    <div key={item.id} className="cart-item">
      <span>{item.name}</span>
      <input
        type="number"
        value={item.quantity}
        min="1"
        onChange={(e) => updateQuantity(item.id, e.target.value)}
      />
      <span>₹{item.price * item.quantity}</span>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  ))}
</div>

<div className="coupon-section">
  <input
    type="text"
    placeholder="Coupon Code"
    value={coupon}
    onChange={(e) => setCoupon(e.target.value)}
  />
  {coupon === 'NATURAL20' && <p className="valid-coupon">✔ 20% discount applied!</p>}
</div>

<div className="payment-section">
  <h3>Payment Method</h3>
  <label><input type="radio" value="cod" checked={paymentMethod === 'cod'} onChange={(e) => setPaymentMethod(e.target.value)} /> Cash on Delivery</label>
  <label><input type="radio" value="upi" checked={paymentMethod === 'upi'} onChange={(e) => setPaymentMethod(e.target.value)} /> UPI</label>
  <label><input type="radio" value="card" checked={paymentMethod === 'card'} onChange={(e) => setPaymentMethod(e.target.value)} /> Card</label>
</div>

<div className="order-summary">
  <p>Subtotal: ₹{subtotal}</p>
  <p>Discount: -₹{discount}</p>
  <h3>Total: ₹{total}</h3>
  <button onClick={placeOrder}>Place Order</button>
</div>

          </>
        ) : (
          <div className="order-confirmation">
            <h3>🎉 Order Confirmed!</h3>
            <p>Thank you for shopping with us!</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
