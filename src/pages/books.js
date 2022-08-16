import React from 'react';
import BookForm from '../components/book-form';
import BookList from '../components/book-list';

const Books = () => (
  <div className="Home" style={{ paddingTop: '2rem' }}>
    <BookList />
    <BookForm />
  </div>
);
export default Books;
