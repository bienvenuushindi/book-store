import '../styles/book-form.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../redux/books/books';

const BookForm = () => {
  const defaultFormState = { title: '', author: '' };
  const [formData, setFormData] = useState(defaultFormState);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    setFormData({ ...defaultFormState });
  }, [books]);
  const updateForm = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const addBook = (e) => {
    e.preventDefault();
    const { title, author } = formData;
    if (title.trim() === '' || author.trim() === '') return;
    const id = uuidv4();
    const category = 'Fiction';
    const book = {
      item_id: id,
      title,
      author,
      category,
    };
    dispatch(createBook(book));
  };
  const optionList = books.map((item) => {
    const id = item[0];
    const { author: bookAuthor } = item[1][0];
    return (
      <option key={id} value={bookAuthor}>{bookAuthor}</option>
    );
  });
  const { title, author } = formData;
  return (
    <div style={{ width: '75rem', margin: 'auto' }}>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form id="book-form" onSubmit={addBook} style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr', gap: '1rem' }}>
        <input type="text" name="title" value={title} onChange={updateForm} className="input-control" placeholder="Book Title" />
        <div className="select-box">
          <input list="book-authors" name="author" value={author} id="book-author" placeholder="Category" style={{ width: '100%' }} onChange={updateForm} className="input-control" />
          <datalist id="book-authors">
            {optionList}
          </datalist>
        </div>
        <button type="submit" name="add-book" className="form-button">Add Book</button>
      </form>
    </div>
  );
};
export default BookForm;
