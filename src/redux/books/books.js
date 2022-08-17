import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

const CREATE = 'book-store/books/CREATE';
const UPDATE = 'book-store/books/UPDATE';
const LOAD = 'book-store/books/LOAD';
const REMOVE = 'book-store/books/REMOVE';
const someDefaultBooks = [
  { title: 'Introduction to Algorithms Third Edition', author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein', id: uuidv4() },
  { title: 'Algorithms  Fourth Edition', author: 'Robert Sedgewick and Kevin Wayne', id: uuidv4() },
];
const bookReducer = (state = [...someDefaultBooks], action = {}) => {
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
      const index = state.findIndex((item) => item.id === action.book.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }

    default:
      return state;
  }
};

const createBook = (book) => {
  const id = uuidv4();
  return ({ type: CREATE, book: { ...book, id } });
};
const updateBook = (book) => ({ type: UPDATE, book });
const loadBook = () => ({ type: LOAD });
const removeBook = (book) => ({ type: REMOVE, book });

export {
  createBook, updateBook, loadBook, removeBook,
};
export default bookReducer;
