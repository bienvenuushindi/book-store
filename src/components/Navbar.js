import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <Link to="/" className="App-link">Books</Link>
    <Link to="/categories" className="App-link">Categories</Link>
  </nav>
);
export default Navbar;
