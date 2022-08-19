import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector(((state) => state.categories));
  return (
    <div className="item-panel" style={{ textAlign: 'center' }}>
      <button type="button" className="form-button" onClick={() => dispatch(checkStatus())}>Check status</button>
      <p>{status}</p>
    </div>
  );
};
export default Categories;
