import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book';
import { removeBook } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const list = books.map((book) => {
    const { author, title } = book;
    return (
      <Book
        key={author + title}
        title={title}
        author={author}
        remove={() => dispatch(removeBook({ title, author }))}
      />
    );
  });
  return (
    <div>
      {list}
    </div>
  );
};
export default BookList;
