import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Categories from './pages/categories';
import Books from './pages/books';
import { loadBook } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBook());
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="content" style={{ marginTop: '2rem' }}>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
