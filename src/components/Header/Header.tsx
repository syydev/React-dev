import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from '../../store/user/user.action'
import { IState } from '../../type';
import styled from 'styled-components';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, name } = useSelector((state: IState) => ({
    isLoggedIn: state.user.isLoggedIn,
    name: state.user.name,
  }));

  return (
    <React.Fragment>
    <AppHeader>
      <AppTitle to='/'>React-dev</AppTitle>
      {!isLoggedIn ? (
        <AppNav>
          <AppNavLink activeClassName="active" to='/login'>Login</AppNavLink>
          <AppNavLink activeClassName="active" to='/signup'>SignUp</AppNavLink>
        </AppNav>
      ) : (
          <AppNav>
            <AppNavLink activeClassName="active" to='/post'>Post List</AppNavLink>
            <AppNavLink activeClassName="active" to='/user'>{name}</AppNavLink>
            <AppNavItem className='header-nav-item' onClick={() => dispatch(UserAction.logout.index())}>Logout</AppNavItem>
          </AppNav>
        )}
    </AppHeader>
    <Dummy />
    </React.Fragment>
  );
};

const AppHeader = styled.div`
  position:fixed;
  background: white;
  padding: 15px;
  width: 100%;
  border-bottom: 1px solid #C7CED5;
  z-index: 9999;
`;

const AppTitle = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 25px;
  font-weight: 700;
  color: black;
`;

const AppNav = styled.nav`
  /* display: inline-block; */
  float: right;
  font-weight: 700;
  right: 20px;
`;

const AppNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 17px;
  color: #A6A6A6;
  margin-right: 15px;

  &:hover {
    color: black;
  }
  &.active {
    color: black;
  }
`;

const AppNavItem = styled.a`
  font-size: 17px;
  color: #A6A6A6;
  margin-right: 15px;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

const Dummy = styled.div`
  padding: 32px;
`;

export default Header;