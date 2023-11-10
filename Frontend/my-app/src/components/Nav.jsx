import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { Link } from 'react-router-dom';
import BankLogo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.user != null);

  const handleSignOut = () => {
    dispatch(logout());
  };
  const user = useSelector((state) => state.auth.user);
  return (
    <nav className="main-nav">
    <Link to="/" className="main-nav-logo">
      <img className="main-nav-logo-image" src={BankLogo} alt="Argent Bank Logo"/>
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
      <div>
        <FontAwesomeIcon icon={faUserCircle} />
        {isAuthenticated ? (
          <>
            <Link to="/user" className="main-nav-item">   {user.body.firstName} </Link>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <Link to="/" onClick={handleSignOut} className="main-nav-item"> Sign Out </Link>
          </>
        ) : (
          <Link to="/login" className="main-nav-item"> Sign In </Link>
        )}
      </div>
    </nav>
  );
};
export default Nav;