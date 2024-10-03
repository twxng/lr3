import React from "react";
import "../assets/cart.css";

function Cart({ products, totalPrice }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {products.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          products.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-item-image" />
              <div className="cart-item-details">
                <span>{product.name}</span>
                <span>${product.price}</span>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-total">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Cart;
