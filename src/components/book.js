import PropTypes from 'prop-types';

const Book = (props) => {
  const { author, title, remove } = props;
  return (
    <div>
      <h4>{title}</h4>
      <h4>{author}</h4>
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
