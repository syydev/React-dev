import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom'
import loginReducer, { initialState } from '../../reducers/login'

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <text>React-dev App</text>
      <li><Link to='/counter'>counter</Link></li>
    </React.Fragment>
  );
}

export default Home;