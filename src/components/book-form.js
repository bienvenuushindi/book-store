import PropTypes from 'prop-types';

const BookForm = (props) => {
  const { books } = props;
  const optionList = books.map((book) => {
    const { author, id } = book;
    return <option key={id} value={author}>{author}</option>;
  });
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" name="title" style={{ marginRight: '2rem' }} />
        <select>
          <option value="author">Author</option>
          {optionList}
        </select>
      </form>
    </div>
  );
};
BookForm.propTypes = {
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BookForm;
