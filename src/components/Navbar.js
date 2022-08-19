import '../styles/navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <span className="Bookstore-CMS Text-Style-7">
      Bookstore CMS
    </span>
    <Link to="/" className="App-link">Books</Link>
    <Link to="/categories" className="App-link opacity-5">Categories</Link>
  </nav>
);
export default Navbar;
