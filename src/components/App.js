import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';  // Custom CSS file

// Components
import Navi from './Navi';
import Footer from './Footer';
import Slider from './Slider';
import ProductsPreview from './ProductsPreview';
import About from './About';
import ComboOffers from './ComboOffers';
import Products from './Products';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  return (
    <Router>
      <div>
        <Navi onSearch={handleSearch} />

        <Routes>
          {/* Home Route */}
          <Route 
            path="/" 
            element={
              <>
                <Slider />
                <ProductsPreview searchTerm={searchTerm} />
                <ComboOffers/>
              </>
            } 
          />

          {/* Other Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products searchTerm={searchTerm}/>} />
          <Route path="/offers" element={<ComboOffers/>}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
