import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import CatalogPage from './components/CatalogPage';
import Footer from './components/footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.js";
//import ArcadeMachine from './components/ArcadeMachine';

function App() {
  return (
   <BrowserRouter>
     <div className="App">
       <Navbar></Navbar>
       <h1>Hello world from react</h1>

       <Routes>
        <Route path="/"element={<HomePage/>} />
        <Route path="/about"element={<AboutPage/>} />
        <Route path="/catalog"element={<CatalogPage/>} />
       </Routes>

      
       <Footer></Footer>    
     </div>
  </BrowserRouter>
  );
}

export default App;

