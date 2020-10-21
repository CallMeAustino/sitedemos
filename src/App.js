import React from 'react';
import './App.css';
import Home from './airbnb/Home.js';
import Banner from './airbnb/Banner.js';
import Search from './airbnb/Search.js';
import Header from './airbnb/Header.js';


function App() {
  return (
    <>
      <Header />
      <Home />
      <Banner />
    </>
  );
}

export default App;
