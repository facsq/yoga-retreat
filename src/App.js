import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PlainSection from './components/PlainSection';
import LocationSection from './components/LocationSection';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PlainSection />
      <LocationSection />
    </div>
  );
};

export default App;
