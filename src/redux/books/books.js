import _ from 'lodash';

const CREATE = 'book-store/books/CREATE';
const UPDATE = 'book-store/books/UPDATE';
const LOAD = 'book-store/books/LOAD';
const REMOVE = 'book-store/books/REMOVE';

const bookReducer = (state = [], action = {}) => {
  switch (action.type) {
    case CREATE: {
      return [...state, action.book];
    }
    case UPDATE:
      return state.map((item) => {
        if (_.isEqual(item, action.book)) return { ...item, ...action.book };
        return item;
      });
    case LOAD:
      return { ...state };
    case REMOVE: {
      const index = state.findIndex((item) => item.title === action.book.title);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }

    default:
      return state;
  }
};

const createBook = (book) => ({ type: CREATE, book });
const updateBook = (book) => ({ type: UPDATE, book });
const loadBook = () => ({ type: LOAD });
const removeBook = (book) => ({ type: REMOVE, book });

export {
  createBook, updateBook, loadBook, removeBook,
};
export default bookReducer;
