import expect from 'expect';
import React from 'react';
import { mount } from 'enzyme';
import CommentBody from '../../components/CommentBody';

function setup(deleted = false, body = 'Test text') {
  const component = mount(
    <CommentBody deleted={deleted} body={body} />
  );

  return {
    component,
    p: component.find('p')
  };
}

describe('CommentBody', () => {
  it('should display comment text', () => {
    const { p } = setup();
    expect(p.text()).toMatch(/^Test text/);
  });

  describe('when deleted is true', () => {
    it('should show comment was deleted', () => {
      const { p } = setup(true);
      expect(p.text()).toMatch(/^This comment was deleted/);
    });
  });
});
