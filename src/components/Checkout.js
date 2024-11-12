import React from 'react';

const Checkout = ({ cartItems }) => (
  <div className="checkout">
    <h2>Checkout</h2>
    {cartItems.length === 0 ? (
      <p>No items in the cart</p>
    ) : (
      cartItems.map((item) => (
        <div key={item.id} className="checkout-item">
          <p>{item.name} - ₹{item.price}</p>
        </div>
      ))
    )}
    {cartItems.length > 0 && (
      <button className="btn btn-success">Proceed to Payment</button>
    )}
  </div>
);

export default Checkout;
