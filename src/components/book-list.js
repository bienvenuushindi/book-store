import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book';
import { removeBook } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const list = books.map((item) => {
    const id = item[0];
    const { author, title } = item[1][0];
    return (
      <Book
        key={id}
        title={title}
        author={author}
        remove={() => dispatch(removeBook(id))}
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
