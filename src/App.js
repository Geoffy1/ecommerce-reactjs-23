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
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup'
import Resetpassword from './pages/Resetpassword'
import SingleBlog from './pages/SingleBlog'
import TermsAndConditions from './pages/TermsAndConditions';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SingleProduct from './pages/SingleProduct';



function App() {
  return (
    
    <>
    
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<OurStore />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="compare-product" element={<CompareProduct />} />
          <Route path="Wishlist" element={<Wishlist />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<Forgotpassword />} />
          <Route path="signup" element={<Signup />} />
          <Route path="reset-password" element={<Resetpassword />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions/>} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="product/:id" element={<SingleProduct />} />
          
        </Route>

       </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
