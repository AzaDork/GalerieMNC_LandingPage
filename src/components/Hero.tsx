import React from 'react';
import vitrine from '/GalerieMNC_vitrine.jpeg';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
        <img
          src={vitrine}
          alt="Galerie MNC Storefront"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-4 opacity-0 animate-fade-in">
              Galerie MNC
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 opacity-0 animate-fade-in animation-delay-200">
              Art contemporain & Encadrement sur mesure
            </p>
            <a 
              href="/oeuvres" 
              className="inline-flex items-center border-b-2 border-white/80 pb-1 hover:border-white transition-all duration-300 opacity-0 animate-fade-in animation-delay-400"
            >
              <span className="mr-2">Découvrir nos artistes</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;