import React from 'react';
import './styles/ArcadeMachine.css';

const ArcadeMachine = () => {
  return (
    <div className="arcade-container">
      <div className="arcade-screen">
        <p className="game-title">Super Retro Game</p>
      </div>
      <div className="controls">
        <button className="control-button">⬆️</button>
        <div className="row">
          <button className="control-button">⬅️</button>
          <button className="control-button">💾</button>
          <button className="control-button">➡️</button>
        </div>
        <button className="control-button">⬇️</button>
      </div>
      <div className="product-info">
        <h2 className="product-title">1990s Arcade Machine</h2>
        <p className="product-description">
          Experience the nostalgia of classic arcade gaming with our authentic 1990s arcade machine. Perfect for game rooms, man caves, or as a unique centerpiece in your home.
        </p>
        <p className="product-price">$499.99</p>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
};

export default ArcadeMachine;