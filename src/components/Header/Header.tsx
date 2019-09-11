import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from '../../store/user/user.action'
import { IState } from '../../type';
import './style.scss';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, name } = useSelector((state: IState) => ({
    isLoggedIn: state.user.isLoggedIn,
    name: state.user.name,
  }));

  return (
    <div className='app-header'>
      <Link className='app-title' style={{ textDecoration: 'none' }} to='/'>React-dev</Link>
      {!isLoggedIn ? (
        <nav className="header-nav">
          <NavLink className="header-nav-item" activeClassName="active" style={{ textDecoration: 'none' }} to='/login'>Login</NavLink>
          <NavLink className="header-nav-item" activeClassName="active" style={{ textDecoration: 'none' }} to='/signup'>SignUp</NavLink>
        </nav>
      ) : (
          <nav className="header-nav">
            <NavLink className='header-nav-item' activeClassName="active" style={{ textDecoration: 'none' }} to='/post'>Post List</NavLink>
            <NavLink className='header-nav-item' activeClassName="active" style={{ textDecoration: 'none' }} to='/user'>{name}</NavLink>
            <a className='header-nav-item' onClick={() => dispatch(UserAction.logout.index())}>Logout</a>
          </nav>
        )}
    </div>
  );
};

export default Header;