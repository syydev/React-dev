import React from 'react';
import CounterContainer from './containers/CounterContainer';
import HeaderContainer from './containers/HeaderContainer';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <CounterContainer />
    </React.Fragment>
  );
};

export default App;
