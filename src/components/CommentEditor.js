import React, { Component, PropTypes } from 'react';

class CommentEditor extends Component {

  static propTypes = {
    body: PropTypes.string,
    onUpdateComment: PropTypes.func,
    onCancelUpdate: PropTypes.func
  }

  render() {
    const { body, onUpdateComment, onCancelUpdate } = this.props;

    return (
      <div className="comment-editor">
        <textarea ref="editor" defaultValue={body} />
        <button
          className="primary"
          onClick={onCancelUpdate}
        >
          Cancel
        </button>
        <button
          className="confirm"
          onClick={() => onUpdateComment(this.refs.editor.value)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default CommentEditor;
