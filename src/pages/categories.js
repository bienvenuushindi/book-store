import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector(((state) => state.categories));
  return (
    <div>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
      <p>{status}</p>
    </div>
  );
};
export default Categories;
