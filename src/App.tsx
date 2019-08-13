import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CounterContainer from './containers/CounterContainer';
import HeaderContainer from './containers/HeaderContainer';
import HomeContainer from './containers/HomeContainer'
import { Login } from './components/Auth';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/counter" component={CounterContainer} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
