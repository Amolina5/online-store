// Footer.jsx
import React from 'react';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>&copy; {new Date().getFullYear()} Created by Alex Molina.</p>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};


export default Footer;