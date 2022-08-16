import { combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const reducers = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});

export default reducers;
