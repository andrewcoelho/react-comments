import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import CommentActions from '../../components/CommentActions';

function setup() {
  const onToggleEditing = expect.createSpy();
  const onDeleteComment = expect.createSpy();

  const component = shallow(
    <CommentActions
      onToggleEditing={onToggleEditing}
      onDeleteComment={onDeleteComment}
    />
  );

  return {
    component,
    onToggleEditing,
    onDeleteComment,
    actionSpans: component.find('.comment-action')
  };
}

describe('CommentActions', () => {
  it('edit span should call onToggleEditing', () => {
    const { actionSpans, onToggleEditing } = setup();
    actionSpans.at(0).simulate('click');
    expect(onToggleEditing).toHaveBeenCalled();
  });

  it('delete span should call onDeleteComment', () => {
    const { actionSpans, onDeleteComment } = setup();
    actionSpans.at(1).simulate('click');
    expect(onDeleteComment).toHaveBeenCalled();
  });
});
