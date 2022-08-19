import { createAsyncThunk } from '@reduxjs/toolkit';
import { add, load, remove } from '../../api/book';

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

const createBook = createAsyncThunk(CREATE, async (book) => add(book));
const loadBook = createAsyncThunk(LOAD, async () => load());
const removeBook = createAsyncThunk(REMOVE, async (id) => remove(id));

export {
  createBook, loadBook, removeBook,
};
export default bookReducer;
