import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book';
import { removeBook } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const ovalProgress = [5, 10, 20, 40, 50, 65, 80];
  const list = books.map((item) => {
    const randomIndex = Math.floor(Math.random() * ovalProgress.length);
    const id = item[0];
    const { author, title, category } = item[1][0];
    return (
      <Book
        key={id}
        title={title}
        author={author}
        category={category}
        remove={() => dispatch(removeBook(id))}
        progress={ovalProgress[randomIndex]}
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
