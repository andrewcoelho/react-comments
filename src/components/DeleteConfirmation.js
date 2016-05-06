import React, { PropTypes } from 'react';

const DeleteConfirmation = ({ onConfirmDelete, onCancelDelete, comment }) => (
  <div className="delete-confirmation-outer">
    <div className="delete-confirmation-inner">
      <p>Are you sure you want to delete this comment?</p>
      <button
        className="primary"
        onClick={onCancelDelete}
      >
        Cancel
      </button>
      <button
        className="danger"
        onClick={() => onConfirmDelete(comment)}
      >
        Delete
      </button>
    </div>
  </div>
);

DeleteConfirmation.propTypes = {
  onConfirmDelete: PropTypes.func,
  onCancelDelete: PropTypes.func,
  comment: PropTypes.object
};

export default DeleteConfirmation;
