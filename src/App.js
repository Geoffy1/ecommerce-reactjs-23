import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import OurStore from './pages/OurStore';
import  CompareProduct from './pages/CompareProduct';
import Blog from './pages/Blog';
import Wishlist from './pages/Wishlist';


function App() {
  return (
    
    <>
    
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<OurStore />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="compare-product" element={<CompareProduct />} />
          <Route path="Wishlist" element={<Wishlist />} />
          
        </Route>

       </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
