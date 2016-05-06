import React, { PropTypes } from 'react';

const createMarkup = body => ({
  __html: body
});

const CommentBody = ({ deleted, body }) => (
  <p
    className="comment-body"
    dangerouslySetInnerHTML={deleted
      ? { __html: '<span class="comment-deleted">This comment was deleted</span>' }
      : createMarkup(body)
    }
  />
);

CommentBody.propTypes = {
  deleted: PropTypes.bool,
  body: PropTypes.string
};

export default CommentBody;
