import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import InteractiveSection from './components/InteractiveSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <InteractiveSection />
      <Footer />
    </div>
  );
}

export default App;