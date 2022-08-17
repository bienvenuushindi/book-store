import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book';
import { removeBook } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const list = books.map((book) => {
    const { author, title, id } = book;
    return (
      <Book
        key={id}
        title={title}
        author={author}
        remove={() => dispatch(removeBook(book))}
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
