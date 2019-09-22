import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer';
import HomeContainer from './containers/HomeContainer'
import Login from './components/Login';
import SignUp from './components/SignUp';
import PostList from './components/PostList';
import Registration from './components/Registration';
import PostInfo from './components/PostInfo';
import Modification from './components/Modification';
import Footer from './components/Footer';
import styled from 'styled-components';

const App: React.FC = () => {
  return (
    <Container>
      <HeaderContainer />
      <Switch>
        <Content>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/post" component={PostList} />
          <Route exact path="/post/registration" component={Registration} />
          <Route exact path="/post/:id/:title" component={PostInfo} />
          <Route exact path="/post/:id/:title/modification" component={Modification} />
        </Content>
      </Switch>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100%;
`;

const Content = styled.div`
  min-height: 100%;
`;

export default App;
