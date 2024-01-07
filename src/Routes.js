import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import HeroSection from './components/Home'; // Import your Home component
// import PersonalInfo from './components/PersonalInfo'; // Import your PersonalInfo component
import HeroSection from '/components/HeroSection';
import Cube from '/components/Cube/Cube';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Cube} /> {/* Default route */}
      <Route path="/personal-info" component={HeroSection} />
      {/* Define other routes as needed */}
    </Switch>
  );
};

export default Routes;
