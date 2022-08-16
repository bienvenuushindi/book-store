const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';

const reducer = (state = [], action = {}) => {
  if (action.type === CHECK_STATUS) {
    return 'Under construction';
  } else {
    return state;
  }
};

const checkStatus = (book) => {
  return { type: CHECK_STATUS, book };
};

export { checkStatus };
export default categoryReducer;