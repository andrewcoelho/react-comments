import React, { Component, PropTypes } from 'react';
import TimeAgo from 'react-timeago';
import classnames from 'classnames';
import CommentActions from '../components/CommentActions';
import CommentBody from '../components/CommentBody';
import CommentEditor from '../components/CommentEditor';

class Comment extends Component {

  static propTypes = {
    currentUser: PropTypes.number,
    author_id: PropTypes.number,
    onUpdateComment: PropTypes.func,
    onDeleteComment: PropTypes.func
  }

  // Sets isAuthor to true if the currentUser id is equal to the comment author_id
  constructor(props) {
    super(props);
    this.state = {
      isAuthor: this.props.currentUser === this.props.author_id,
      isEditing: false
    };
  }

  // Calls onUpdateComment and closes the editing component
  handleUpdateComment = (text, comment) => {
    const updatedComment = Object.assign(comment, { comment: text });
    this.setState({ isEditing: false });
    this.props.onUpdateComment(updatedComment);
  }

  render() {
    const {
      currentUser,
      onUpdateComment,
      onDeleteComment,
      ...comment
    } = this.props;

    const { isAuthor, isEditing } = this.state;

    // Only renders the comment head if the comment is not marked as deleted.
    let commentHead;
    if (!comment.deleted) {
      // Renders the comment head with actions if current user is author or with
      // only basic info if current user is not author.
      let commentActions;
      if (isAuthor) {
        commentActions = (
          <div>
            <span className="comment-author">You</span><span> replied </span>
            <TimeAgo date={comment.datetime} />
            <CommentActions
              onToggleEditing={() => this.setState({ isEditing: true })}
              onDeleteComment={() => {
                this.setState({ isEditing: false });
                onDeleteComment(comment);
              }}
            />
          </div>
        );
      } else {
        commentActions = (
          <div>
            <span className="comment-author">{comment.author}</span><span> replied </span>
            <TimeAgo date={comment.datetime} />
          </div>
        );
      }

      commentHead = (
        <div className="comment-info">
          {commentActions}
        </div>
      );
    }

    // Renders a textarea if currently editing, otherwise renders the comment body
    let commentMain;
    if (isEditing) {
      commentMain = (
        <CommentEditor
          body={comment.comment}
          onUpdateComment={text => this.handleUpdateComment(text, comment)}
          onCancelUpdate={() => this.setState({ isEditing: false })}
        />
      );
    } else {
      commentMain = (
        <CommentBody deleted={comment.deleted} body={comment.comment} />
      );
    }

    // Recursively renders comments if children exist
    let replies;
    if (comment.comments) {
      replies = comment.comments.map(childComment =>
        <Comment
          key={childComment.id}
          currentUser={currentUser}
          onUpdateComment={onUpdateComment}
          onDeleteComment={onDeleteComment}
          {...childComment}
        />
      );
    }

    return (
      <li className={'comment ' + classnames({ 'is-author': isAuthor && !comment.deleted })}>
        {commentHead}
        {commentMain}
        {replies ?
          <ul className="comment-thread child">{replies}</ul>
          : null
        }
      </li>
    );
  }
}

export default Comment;
