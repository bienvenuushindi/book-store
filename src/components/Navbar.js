import '../styles/navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav" style={{ display: 'flex' }}>
    <h2 className="app-name">
      Bookstore CMS
    </h2>
    <Link to="/" className="App-link">Books</Link>
    <Link to="/categories" className="App-link opacity-5">Categories</Link>
  </nav>
);
export default Navbar;
