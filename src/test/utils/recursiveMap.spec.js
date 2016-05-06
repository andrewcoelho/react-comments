import expect from 'expect';
import { recursiveMap } from '../../utils';

describe('recursive map', () => {
  it('should handle state change recursively', () => {
    expect(
      recursiveMap({
        author: 'Frank',
        deleted: true,
        id: 1,
        comments: []
      }, [
        {
          author: 'Anne',
          deleted: false,
          id: 0,
          comments: [
            {
              author: 'Frank',
              deleted: false,
              id: 1,
              comments: []
            }
          ]
        }
      ])
    ).toEqual([
      {
        author: 'Anne',
        deleted: false,
        id: 0,
        comments: [
          {
            author: 'Frank',
            deleted: true,
            id: 1,
            comments: []
          }
        ]
      }
    ]);
  });
});
