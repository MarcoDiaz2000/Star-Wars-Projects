import cardCounter from './cardCounter.js';

describe('cardCounter', () => {
  test('should return the length of the passed array', () => {
    const items = [1, 2, 3, 4, 5];
    expect(cardCounter(items)).toBe(5);
  });

  test('should return the length of the passed array', () => {
    const items = [];
    expect(cardCounter(items)).toBe(0);
  });
});
