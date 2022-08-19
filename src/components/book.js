import '../styles/book-item.css';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    author, title, remove, category, progress,
  } = props;
  return (
    <div className="item-panel" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="item-category">{category}</div>
        <div className="item-title">{title}</div>
        <div className="item-author">{author}</div>
        <div style={{ display: 'flex', marginTop: '0.5rem' }}>
          <button type="button" className="item-button" onClick={remove}>Comments</button>
          <button type="button" className="item-button border-x" onClick={remove}>Remove</button>
          <button type="button" className="item-button">Edit</button>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className={`item-progress-oval oval-${progress}`} />
        <div>
          <div className="item-progress-percent-complete">
            {`${progress}%`}
          </div>
          <div className="item-progress-completed-text">
            Completed
          </div>
        </div>
      </div>
      <div>
        <div className="item-current-chapter">
          Current Chapter
        </div>
        <div className="item-current-lesson">
          Chapter 17
        </div>
        <div className="item-progress-update-button">
          <span className="item-progress-update-button-text">Update progress</span>
        </div>
      </div>

    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
};
export default Book;
