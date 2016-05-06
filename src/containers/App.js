import React, { Component } from 'react';
import discussionThread from '../../discussion.json';
import DiscussionHead from '../components/DiscussionHead';
import CommentList from '../components/CommentList';
import DeleteConfirmation from '../components/DeleteConfirmation';
import { recursiveMap, recursiveCount } from '../utils';

const initialState = discussionThread.discussion.comments;

class App extends Component {

  // Set the currently logged in user
  // and attach the comments from discussion.json into container state
  state = {
    currentUser: 4,
    comments: initialState,
    confirmDelete: false
  }

  // Update a comment after it has been edited
  handleUpdateComment = (comment, state = this.state.comments) => {
    const updatedComments = recursiveMap(comment, state);
    this.setState({ comments: updatedComments });
  }

  // Opens the delete confirmation modal
  handleConfirmDelete = (comment) => {
    this.setState({
      confirmDelete: true,
      commentToDelete: comment
    });
  }

  // Closes the delete confirmation modal
  handleCancelDelete = () => {
    this.setState({
      confirmDelete: false,
      commentToDelete: ''
    });
  }

  // Set the deleted flag on a comment to true
  handleDeleteComment = (comment, state = this.state.comments) => {
    const commentToDelete = Object.assign(comment, { deleted: true, comment: '' });
    const updatedComments = recursiveMap(commentToDelete, state);
    this.setState({
      comments: updatedComments,
      confirmDelete: false,
      commentToDelete: ''
    });
  }

  render() {
    const { discussion } = discussionThread;
    const { currentUser, comments, confirmDelete } = this.state;

    return (
      <div>
        {confirmDelete ?
          <DeleteConfirmation
            onConfirmDelete={this.handleDeleteComment}
            onCancelDelete={this.handleCancelDelete}
            comment={this.state.commentToDelete}
          />
          : null
        }
        <div className="discussion-container">
          <DiscussionHead
            discussionCount={recursiveCount(comments)}
            {...discussion}
          />

          <CommentList
            comments={comments}
            currentUser={currentUser}
            onUpdateComment={this.handleUpdateComment}
            onDeleteComment={this.handleConfirmDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
