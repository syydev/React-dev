import React from 'react';
import { Link } from 'react-router-dom'
import Slider from './Slider';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Slider />
      <text>React-dev App</text>
      <li><Link to='/counter'>counter</Link></li>
    </React.Fragment>
  );
}

export default Home;