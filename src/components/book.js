import PropTypes from 'prop-types';

const Book = (props) => {
  const { author, title } = props;
  return (
    <div>
      <h4>{title}</h4>
      <h4>{author}</h4>
      <button type="button">Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
