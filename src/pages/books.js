import React from 'react';
import BookForm from '../components/book-form';
import BookList from '../components/book-list';

const Books = () => (
  <div className="Home">
    <BookList />
    <div className="Line"></div>
    <BookForm />
  </div>
);
export default Books;
