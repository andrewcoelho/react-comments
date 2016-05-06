import expect from 'expect';
import React from 'react';
import { mount } from 'enzyme';
import DiscussionHead from '../../components/DiscussionHead';

function setup() {
  const discussion = {
    title: 'Test Title',
    author: 'Test Author',
    discussion: 'Test Discussion',
    datetime: '2015-01-23T18:25:43.511Z'
  };

  const component = mount(
    <DiscussionHead discussionCount={10} {...discussion} />
  );

  return {
    component,
    h1: component.find('h1'),
    span: component.find('.discussion-author'),
    p: component.find('.discussion-body'),
    h3: component.find('h3')
  };
}

describe('DiscussionHead', () => {
  it('should display discussion title', () => {
    const { h1 } = setup();
    expect(h1.text()).toMatch(/^Test Title/);
  });

  it('should display discussion author surrounded by space', () => {
    const { span } = setup();
    expect(span.text()).toMatch(/^ Test Author /);
  });

  it('should display discussion body', () => {
    const { p } = setup();
    expect(p.text()).toMatch(/^Test Discussion/);
  });

  it('should display discussion reply count', () => {
    const { h3 } = setup();
    expect(h3.text()).toMatch(/^10 replies/);
  });
});
