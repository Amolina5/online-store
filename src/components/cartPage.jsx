import React, { useContext } from 'react';
import { GlobalContext } from '../state/globalContext';
import './styles/cartPage.css';

const CartPage = () => {
  const { cart, removeProductFromCart, clearCart } = useContext(GlobalContext);

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const colorClasses = ['product-red', 'product-blue', 'product-green'];

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((product, index) => (
              <li key={index} className={`cart-item ${colorClasses[index % colorClasses.length]}`}>
                <img src={product.image} alt={product.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2>{product.name}</h2>
                  <p>${product.price.toFixed(2)}</p>
                  <button onClick={() => removeProductFromCart(product.id)} className="remove-button">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button onClick={clearCart} className="clear-button">Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;