import commentCounter from './commentCounter.js';

describe('commentCounter', () => {
  test('should return the length comments', () => {
    const comments = [1, 2, 3, 4, 5];
    expect(commentCounter(comments)).toBe(5);
  });
});
