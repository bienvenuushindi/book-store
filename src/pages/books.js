import React from 'react';
import BookForm from '../components/book-form';
import BookList from '../components/book-list';

const Books = () => (
  <div className="Home">
    <BookList />
    <div
      className="Line"
      style={{
        height: '0.14rem',
        border: 'solid 1px #e8e8e8',
        width: '75rem',
        margin: '3rem auto',
      }}
    />
    <BookForm />
  </div>
);
export default Books;
