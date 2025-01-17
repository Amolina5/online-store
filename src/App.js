import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import CatalogPage from './components/CatalogPage';
import Footer from './components/footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Admin from './components/admin';
import Contact from './components/Contact';
import CartPage from './components/cartPage';
import GlobalProvider from './state/globalProvider';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
