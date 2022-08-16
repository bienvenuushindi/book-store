import PropTypes from 'prop-types';

const Book = (props) => {
  const { author, title, remove } = props;
  return (
    <div>
      <h4>{title.toUpperCase()}</h4>
      <h5 style={{ color: 'red' }}>{author}</h5>
      <button type="button" onClick={remove}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};
export default Book;
