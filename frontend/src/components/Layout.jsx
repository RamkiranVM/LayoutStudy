import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/actions">Actions</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>© 2024 Ramkiran V M</footer>
    </div>
  );
};

export default Layout;
