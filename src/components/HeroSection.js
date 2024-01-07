
import React from 'react';
import './HeroSection.scss';
import Dice from './Dice/Dice';


const HeroSection = () => {
  const scrollToExplore = () => {
    const exploreSection = document.getElementById('Explore');
    if (exploreSection) {
      window.scrollTo({
        top: exploreSection.offsetTop - 30,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Pooji's husband</h1>
        <p>Experienced Web Development Engineer</p>
        <p class ='description'>8 years of expertise in building high-performance & scalable web solutions</p>
        <p class ='description'>Passionate about optimizing UX, solving challenges, and delivering excellence</p>
  

        <button className="cta-button" onClick={scrollToExplore}>
          Explore his Skills/Details
        </button>

      </div>
      <div className="hero-dice-area">
        <Dice />
      </div>
    </section>
  );
};

export default HeroSection;
