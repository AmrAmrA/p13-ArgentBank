import React from 'react';
import { Link } from 'react-router-dom';
import BankLogo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';

const Nav = ({ isAuthenticated }) => (
  <nav className="main-nav">
    <Link to="/" className="main-nav-logo">
      <img className="main-nav-logo-image" src={BankLogo} alt="Argent Bank Logo"/>
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <div>
      <FontAwesomeIcon icon={faUserCircle} />
      {isAuthenticated ? (
        <><Link to="/" className="main-nav-item"> Tony </Link>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <Link to="/" className="main-nav-item"> Sign Out </Link></>
      ) : (
        <Link to="/Login" className="main-nav-item"> Sign In </Link>
      )}
    </div>
  </nav>
);
export default Nav;