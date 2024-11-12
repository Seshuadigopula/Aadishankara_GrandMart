import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Navi from './Navi';
import Footer from './Footer';
import Slider from './Slider';
import ProductsPreview from './ProductsPreview';
import About from './About';
import ComboOffers from './ComboOffers';
import Products from './Products';
import SidebarCart from './SidebarCart';
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <Router>
      <div>
        <Navi onSearch={handleSearch} toggleCart={toggleCart} />
        <SidebarCart isOpen={isCartOpen} cartItems={cartItems} toggleCart={toggleCart} />

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Slider />
                <ProductsPreview searchTerm={searchTerm} addToCart={addToCart} />
                <ComboOffers/>
              </>
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products searchTerm={searchTerm} addToCart={addToCart} />} />
          <Route path="/offers" element={<ComboOffers/>}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
