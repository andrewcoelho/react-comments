import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Comment from '../../containers/Comment';

describe('Comment', () => {
  it('adds is-author class is user is author', () => {
    const comment = {
      author_id: 0,
      datetime: '2015-01-23T18:31:43.511Z'
    };
    const wrapper = shallow(<Comment currentUser={0} {...comment} />);
    expect(wrapper.find('li').hasClass('is-author')).toEqual(true);
  });

  it('sets isAuthor in state correctly', () => {
    const comment = {
      author_id: 0,
      datetime: '2015-01-23T18:31:43.511Z'
    };
    const wrapper = shallow(<Comment currentUser={0} {...comment} />);
    expect(wrapper.state().isAuthor).toEqual(true);
  });
});
