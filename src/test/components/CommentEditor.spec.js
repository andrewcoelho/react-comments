import expect from 'expect';
import React from 'react';
import { mount } from 'enzyme';
import CommentEditor from '../../components/CommentEditor';

function setup(body = 'Test text') {
  const onUpdateComment = expect.createSpy();
  const onCancelUpdate = expect.createSpy();

  const component = mount(
    <CommentEditor
      body={body}
      onUpdateComment={onUpdateComment}
      onCancelUpdate={onCancelUpdate}
    />
  );

  return {
    component,
    onUpdateComment,
    onCancelUpdate,
    textarea: component.find('textarea'),
    buttons: component.find('button')
  };
}

describe('CommentEditor', () => {
  it('should fill textarea with comment body', () => {
    const { textarea } = setup();
    expect(textarea.text()).toMatch(/^Test text/);
  });

  it('cancel button should call onCancelUpdate', () => {
    const { buttons, onCancelUpdate } = setup();
    buttons.at(0).simulate('click');
    expect(onCancelUpdate).toHaveBeenCalled();
  });

  it('submit button should call onUpdateComment', () => {
    const { buttons, onUpdateComment } = setup();
    buttons.at(1).simulate('click');
    expect(onUpdateComment).toHaveBeenCalled();
  });
});
