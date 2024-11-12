import React from 'react';
import './App.css';

const CartSidebar = ({ isOpen, cartItems, toggleCart }) => {
  // Calculate the total price by converting prices to numbers before summing
  const totalPrice = cartItems.reduce((total, item) => total + Number(item.price), 0);

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <h2>
        Your Cart
        <button onClick={toggleCart} className="cart-sidebar-close">X</button>
      </h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image_path} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-title">{item.name}</div>
              <div className="cart-item-price">₹{item.price}</div>
            </div>
          </div>
        ))
      )}
      <div className="cart-total">
        Total: ₹{totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default CartSidebar;
