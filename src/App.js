import React from 'react';
import './App.css';
import Home from './airbnb/Home.js';
import Search from './airbnb/Search.js';
import Header from './airbnb/Header.js';
import Footer from './airbnb/Footer.js';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
