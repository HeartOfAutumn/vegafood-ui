import React from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import Pieces from '../components/Pieces';
import Works from '../components/Works';
import Faq from '../components/Faq';

import './HomeScreen.css';

function HomeView() {
  return (
    <div className="main home">
      <Hero />
      <About />
      <Pieces />
      <Works />
      <Faq />
    </div>
  );
}

export default HomeView;