import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import CommentList from '../../components/CommentList';

function setup() {
  const comments = [
    {
      id: 0,
      datetime: '2015-01-23T18:31:43.511Z'
    },
    {
      id: 1,
      datetime: '2015-01-23T18:31:43.511Z'
    }
  ];

  const component = shallow(
    <CommentList
      comments={comments}
    />
  );

  return {
    component,
    comments,
    children: component.children()
  };
}

describe('CommentList', () => {
  it('should render children', () => {
    const { comments, children } = setup();
    expect(children).to.have.length(comments.length);
  });
});
