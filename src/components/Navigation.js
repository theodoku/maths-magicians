import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <header className="header">
    <Link to="/">
      <h2>Math Magicians</h2>
    </Link>
    <nav>
      <ul className="nav">
        <li>
          <Link to="/" className="links">Home</Link>
        </li>
        <li>
          <Link to="/calculator" className="links">Calculator</Link>
        </li>
        <li>
          <Link to="/quotes" className="links">Quotes</Link>
        </li>
      </ul>

    </nav>
  </header>
);

export default Navigation;
