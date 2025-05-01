import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Nouveaute from './components/Nouveaute';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { setupAnimations } from './utils/animations';

function App() {
  useEffect(() => {
    setupAnimations();
    
    // Update page title
    document.title = 'Galerie MNC | Art Contemporain & Encadrement';
  }, []);

  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Hero />
      <Introduction />
      <Nouveaute />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
