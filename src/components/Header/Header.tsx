import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthCheck } from '../../utils';
import { useDispatch } from 'react-redux';
import './style.scss';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className='app-header'>
      <Link className='app-title' style={{ textDecoration: 'none' }} to='/'>React-dev</Link>
      {!AuthCheck() ? (
        <nav className="header-nav">
          <NavLink className="header-nav-item" activeClassName="active" style={{ textDecoration: 'none' }} to='/login'>Login</NavLink>
          <NavLink className="header-nav-item" activeClassName="active" style={{ textDecoration: 'none' }} to='/signup'>SignUp</NavLink>
        </nav>
      ) : (
          <nav className="header-nav">
            <NavLink className='header-nav-item' activeClassName="active" style={{ textDecoration: 'none' }} to='/post'>Post List</NavLink>
            <NavLink className='header-nav-item' activeClassName="active" style={{ textDecoration: 'none' }} to='/user'>{localStorage.getItem('id')}</NavLink>
            <a className='header-nav-item' onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</a>
          </nav>
        )}
    </div>
  );
}

export default Header;