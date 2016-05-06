import expect from 'expect';
import { recursiveCount } from '../../utils';

describe('recursive count', () => {
  it('should count all comments recursively', () => {
    expect(
      recursiveCount([
        {
          author: 'Anne',
          deleted: false,
          id: 0,
          comments: [
            {
              author: 'Frank',
              deleted: false,
              id: 1,
              comments: [
                {
                  author: 'Nastasia',
                  deleted: false,
                  id: 2,
                  comments: []
                }
              ]
            }
          ]
        }
      ])
    ).toEqual(3);
  });
});
