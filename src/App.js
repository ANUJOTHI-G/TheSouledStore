import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import About from './components/About';
//import ContactUs from './components/ContactUs';
import Shop from './components/Shop';
import Women from './components/Women';
import Men from './components/Men';
import Kids from './components/Kids';
import Category from './components/Category';
import TShirt from './components/TShirt';
import Jumpsuit from './components/Jumpsuit';
import Tops from './components/Tops';
import Jackets from './components/Jackets';
import Shirt from './components/Shirt';
import Boys from './components/Boys';
import Girls from './components/Girls';
import Topselling from './components/Topselling';
import Footer from './components/Footer';
import Casual from './components/Casual';
import Cart from './components/Cart';
import Payment from './components/Payment';
import AdminDashboard from './components/AdminDashboard';

//import { CartProvider } from './components/CartContext';

import './App.css';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <div className="app">
        <Navbar favorites={favorites} setFavorites={setFavorites} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/tshirt" element={< TShirt/>} />
          <Route path="/jumpsuit" element={< Jumpsuit/>} />
          <Route path="/tops" element={< Tops/>} />
          <Route path="/jackets" element={< Jackets/>} />
          <Route path="/shirt" element={< Shirt/>} />
          <Route path="/casual" element={< Casual/>} />
          <Route path="/boys" element={< Boys/>} />
          <Route path="/girls" element={< Girls/>} />
          <Route path="/Topselling" element={< Topselling/>} />
          <Route path="/cart" element={< Cart/>} />
          <Route path="/payment" element={< Payment/>} />
          <Route path="/AdminDashboard" element={< AdminDashboard/>} />

          
         
          

          

          




          {/* <Route path="/contactus" element={<ContactUs />} /> */}
          <Route path="/shop" element={<Shop favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/women" element={<Women favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/men" element={<Men favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/kids" element={<Kids favorites={favorites} setFavorites={setFavorites} />} />
        </Routes>
        <Footer />
        
      </div>
      
    </Router>
  );
}

export default App;



