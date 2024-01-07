import React from 'react';
import './App.scss'; // Your main SCSS file
// import HeroSection from '/components/HeroSection.js'; // Import your HeroSection component
import HeroSection from './components/HeroSection';
import Cube from './components/Cube/Cube';
import TabComponent from './components/TabComponent/TabComponent';
import SkillsSection from './components/Skills/SkillsSection';
// import Dice from './components/Dice/Dice';
// import ContentImageSection from './ContentImageSection'; // Import your ContentImageSection component

function App() {
  return (
    <div className="App">
      {/* Include the HeroSection */}
      <HeroSection />
      <TabComponent />
      <SkillsSection />
      {/* <Cube /> */}
      {/* <Dice /> */}

      {/* Include the ContentImageSection */}
      {/* <ContentImageSection /> */}
    </div>
  );
}

export default App;
