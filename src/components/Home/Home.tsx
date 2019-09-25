import React from 'react';
import Slider from './Slider';
import QuickMenu from './QuickMenu';
import Vision from './Vision';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Slider />
      <QuickMenu />
      <Vision />
    </React.Fragment>
  );
}

export default Home;