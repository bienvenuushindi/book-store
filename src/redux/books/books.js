import _ from "lodash";

const CREATE = 'book-store/books/CREATE';
const UPDATE = 'book-store/books/UPDATE';
const LOAD = 'book-store/books/LOAD';
const REMOVE = 'book-store/books/REMOVE';

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.book];
    case UPDATE:
      return state.map((item) => {
        if (_.isEqual(item, action.book)) return { ...item, ...action.book };
        return item;
      });
    case LOAD:
      return {...state};
    case REMOVE: {
      const { title, author } = action.book;
      const index = state.find((item) => (item.title === title && item.author === author));
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }

    default:
      return state;
  }
};

const createBook = () => {
  return { type: CREATE };
};
const updateBook = (book) => {
  return { type: UPDATE, book };
};
const loadBook = () => {
  return { type: LOAD };
};
const removeBook = (book) => {
  return { type: REMOVE, book };
};

export { createBook, updateBook, loadBook, removeBook };
export default bookReducer;