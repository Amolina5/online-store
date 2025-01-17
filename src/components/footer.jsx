import React from 'react';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Created by Alex Molina.</p>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="pacman"></div>
      <div className="dots">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="dot"></div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;