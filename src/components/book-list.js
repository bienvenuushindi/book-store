import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book';
import { removeBook } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const list = books.map((item) => {
    const randomIndex = Math.floor(Math.random() * 100);
    const id = item[0];
    const { author, title, category } = item[1][0];
    return (
      <Book
        key={id}
        title={title}
        author={author}
        category={category}
        remove={() => dispatch(removeBook(id))}
        progress={randomIndex}
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
