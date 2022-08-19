import '../styles/navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';

const Navbar = () => (
  <nav className="nav" style={{ display: 'flex' }}>
    <h2 className="app-name">
      Bookstore CMS
    </h2>
    <Link to="/" className="App-link">Books</Link>
    <Link to="/categories" className="App-link opacity-5">Categories</Link>
    <div style={{ flexGrow: 1, textAlign: 'end' }}>
      <BsPersonCircle style={{ color: '#0290ff', fontSize: '2rem' }} />
    </div>
  </nav>
);
export default Navbar;
