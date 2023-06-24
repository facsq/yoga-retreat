import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PlainSection from './components/PlainSection';
import LocationSection from './components/LocationSection';
import WellnessExpertSection from './components/WellnessExpertSection ';
import CardSection from './components/CardSection';
import TeamMembersSection from './components/TeamMembersSection';
import AboutWellnessExpert from './components/AboutWellnessExpert';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PlainSection />
      
      <WellnessExpertSection />
      <CardSection />
      <TeamMembersSection />
      <AboutWellnessExpert />
      <Footer />
    </div>
  );
};

export default App;
