import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthCheck } from '../../utils';
import { UserAction } from '../../store/user/user.action'
import './style.scss';

const Header: React.FC = (props: any) => {
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
            <NavLink className='header-nav-item' activeClassName="active" style={{ textDecoration: 'none' }} to='/user'>{localStorage.getItem('name')}</NavLink>
            <a className='header-nav-item' onClick={() => props.logout()}>Logout</a>
          </nav>
        )}
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch(UserAction.logout.index())
});

export default connect(null, mapDispatchToProps)(Header);