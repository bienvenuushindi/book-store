import React, { useState } from 'react';
import BookForm from '../components/book-form';
import BookList from '../components/book-list';

const Books = () => {
  const [books, setBooks] = useState([]);
  const bookList = (items) => {
    setBooks([...items]);
  };
  return (
    <div className="Home" style={{ paddingTop: '2rem' }}>
      <BookList shareBookList={bookList} />
      <BookForm books={books} />
    </div>
  );
};
export default Books;
