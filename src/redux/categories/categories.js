const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';

const categoryReducer = (state = [], action = {}) => {
  if (action.type === CHECK_STATUS) {
    return 'Under construction';
  }
  return state;
};

const checkStatus = () => ({ type: CHECK_STATUS });

export { checkStatus };
export default categoryReducer;
