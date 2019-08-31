import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserAction } from '../../store/user/user.action'
import './style.scss';

const Header: React.FC = (props: any) => {
  const { isLoggedIn, name, logout } = props;
  const push = (url: string) => props.history.push(url);

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
            <a className='header-nav-item' onClick={() => logout({ push: push })}>Logout</a>
          </nav>
        )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = (dispatch: any) => ({
  logout: (push: any) => dispatch(UserAction.logout.index(push))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);