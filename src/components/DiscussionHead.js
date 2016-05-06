import React, { PropTypes } from 'react';
import TimeAgo from 'react-timeago';

const DiscussionHead = ({ discussionCount, ...discussion }) => (
  <div>
    <h1 className="discussion-title">{discussion.title}</h1>
    <p className="discussion-info">
      Published by
      <span className="discussion-author"> {discussion.author} </span>
      <TimeAgo date={discussion.datetime} />
    </p>
    <p className="discussion-body">{discussion.discussion}</p>
    <h3 className="discussion-count">{discussionCount} replies</h3>
  </div>
);

DiscussionHead.propTypes = {
  discussionCount: PropTypes.number,
  discussion: PropTypes.string
};

export default DiscussionHead;
