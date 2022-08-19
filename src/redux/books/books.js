import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiUrl } from '../../env';

const CREATE = 'book-store/books/CREATE';
const CREATE_FULFILLED = 'book-store/books/CREATE/fulfilled';
const LOAD = 'book-store/books/LOAD';
const LOAD_FULFILLED = 'book-store/books/LOAD/fulfilled';
const REMOVE = 'book-store/books/REMOVE';
const REMOVE_FULFILLED = 'book-store/books/REMOVE/fulfilled';
const bookReducer = (state = [], action = {}) => {
  switch (action.type) {
    case CREATE_FULFILLED: {
      return [...state, action.payload.book];
    }
    case LOAD_FULFILLED: {
      return [...action.payload.book];
    }
    case REMOVE_FULFILLED: {
      return [...state.filter((item) => item[0] !== action.payload.id)];
    }
    default:
      return state;
  }
};

const createBook = createAsyncThunk(CREATE, async (book) => {
  const createdBook = { book: [] };
  await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => {
    const {
      item_id: id, title, author, category,
    } = book;
    createdBook.book = [id, [{ title, author, category }]];
  });
  return createdBook;
});
const loadBook = createAsyncThunk(LOAD, async () => {
  let result = [];
  await fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      result = [...Object.entries(data)];
    });
  return { book: result };
});
const removeBook = createAsyncThunk(REMOVE, async (id) => {
  await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return { id };
});

export {
  createBook, loadBook, removeBook,
};
export default bookReducer;
