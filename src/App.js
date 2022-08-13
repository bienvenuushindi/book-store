import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="content">
         <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
         </Routes>
      </div>
    </div>
  );
}

export default App;
