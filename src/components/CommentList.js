import React, { PropTypes } from 'react';
import Comment from '../containers/Comment';

const CommentList = ({
  comments,
  currentUser,
  onUpdateComment,
  onDeleteComment
}) => (
  <ul className="comment-thread parent">
    {comments.map(comment =>
      <Comment
        key={comment.id}
        currentUser={currentUser}
        onUpdateComment={onUpdateComment}
        onDeleteComment={onDeleteComment}
        {...comment}
      />
    )}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.array,
  currentUser: PropTypes.number,
  onUpdateComment: PropTypes.func,
  onDeleteComment: PropTypes.func
};

export default CommentList;
