import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Products from './Pages/Products/Products';
import Blog from './Pages/Blog/Blog';
import ShopNow from './Pages/ShopNow/ShopNow';
import ContactUs from './Pages/ContactUs/ContactUs';
import JoinUs from './Pages/JoinUs/JoinUs';
import Cart from './components/Cart/Cart';
import LoginForm from './components/LoginForm/LoginForm';
import Checkout from './Pages/CheckOut/Checkout';
import ThankYou from './Pages/Thankyou/Thankyou';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './App.css';





function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<ShopNow />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/checkout' element={<Checkout/>} /> 
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
