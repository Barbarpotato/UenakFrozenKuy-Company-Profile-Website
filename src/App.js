import './App.css';
import React, { useState, useEffect } from 'react';

import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import About from './components/About';
import Product from './components/Product';
import Purchase from './components/Purchase';
import Review from './components/Review';
import Location from './components/Location';
import Kontak from './components/Kontak';
import Footer from './components/Footer';

function App() {

  const [miniScreen, setMiniScreen] = useState();

  const checkWindowSize = () => {
    // if width from the windows more than 768 than seet value to true
    if (window.screen.width > 768) {
      return true;
    }
    else {
      return false;
    }
  }

  useEffect(() => {
    setMiniScreen(checkWindowSize());
  }, []);

  return (
    <div className="App">
      <Navigation screen_width={miniScreen} />
      <Introduction />
      <About />
      <Product screen_width={miniScreen} />
      <Purchase />
      <Review />
      <Location />
      <Kontak />
      <Footer />
    </div>
  );
}

export default App;
