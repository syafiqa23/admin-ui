import { useState } from 'react';
import PropTypes from 'prop-types';

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  function toggleClicked() {
    setClicked((prev) => !prev);
  }

  return (
    <div className="post-card">
      <div className="post-title">{title}</div>
      <div className="post-body">{body}</div>
      <div className="post-footer">
        <button
          className={`btn ${clicked ? 'btn-clicked' : 'btn-default'}`}
          onClick={toggleClicked}
        >
          {clicked ? 'Tombol sudah diklik' : 'Silakan Klik'}
        </button>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostCard;
