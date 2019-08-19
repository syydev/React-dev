import React from 'react';
import { Link } from 'react-router-dom';
import { AuthCheck } from '../../utils/Auth';
import { useDispatch } from 'react-redux';
import './style.scss';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className='app-header'>
      <Link className='app-title' to='./'>React-dev</Link>
      {!AuthCheck() ? (
        <nav className="header-nav">
          <Link className="header-nav-item" to='./login'>Login</Link>
        </nav>
      ) : (
          <nav className="header-nav">
            <Link className='header-nav-item' to='./post'>Post List</Link>
            <Link className='header-nav-item' to='./'>{localStorage.getItem('id')}</Link>
            <a className='header-nav-item' onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</a>
          </nav>
        )}
    </div>
  );
}

export default Header;