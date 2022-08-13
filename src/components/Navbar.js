import './css/navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="link">Books</Link>
      <Link to="/categories" className="link">Categories</Link>
    </nav>
  );
};
export default Navbar;
