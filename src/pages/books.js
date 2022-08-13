import React, { useEffect, useState } from 'react';
import Book from '../components/book';
import BookForm from '../components/book-form';

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const data = [];// Will store the fetched  list of book
    setBooks(data);
  }, []);
  const list = books.map((book) => {
    const { author, id, title } = book;
    return <Book key={id} title={title} author={author} />;
  });

  return (
    <div className="Home" style={{ paddingTop: '2rem' }}>
      {list}
      <BookForm books={books} />
    </div>
  );
};
export default Books;
