import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Book from './book';

const BookList = (props) => {
  const { shareBookList } = props;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const data = [];// Will store the fetched  list of book
    setBooks(data);
  }, []);

  useEffect(() => {
    shareBookList([...books]);
  }, [books]);

  const list = books.map((book) => {
    const { author, id, title } = book;
    return <Book key={id} title={title} author={author} />;
  });
  return (
    <div>
      {list}
    </div>
  );
};
BookList.propTypes = {
  shareBookList: PropTypes.func.isRequired,
};
export default BookList;
