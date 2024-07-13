import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css'
import About from './about';
import Contact from './contact';
import SignUp from './signup';
import Navbar from './navbar';
import Header from './header';
import Main from './main';
import Footer from './footer';
import BookCatalog from './catalog';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/catalog" element={<BookCatalog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;

