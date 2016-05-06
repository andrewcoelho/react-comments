import React, { PropTypes } from 'react';

const CommentActions = ({ onToggleEditing, onDeleteComment }) => (
  <span className="comment-actions">
    <span
      className="comment-action"
      onClick={onToggleEditing}
    >
      Edit
    </span>
    {' – '}
    <span
      className="comment-action"
      onClick={onDeleteComment}
    >
      Delete
    </span>
  </span>
);

CommentActions.propTypes = {
  onToggleEditing: PropTypes.func,
  onDeleteComment: PropTypes.func
};

export default CommentActions;
