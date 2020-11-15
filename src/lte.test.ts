import fromNumber from './fromNumber';
import lte from './lte';

describe('lte()', () => {
  it('should return true when the first large number is smaller than the second', () => {
    expect(lte(fromNumber(-1000), fromNumber(-100))).toBe(true);
    expect(lte(fromNumber(0), fromNumber(100))).toBe(true);
    expect(lte(fromNumber(-0.123), fromNumber(0))).toBe(true);
    expect(lte(fromNumber(1, 200), fromNumber(3, 200))).toBe(true);
    expect(lte(fromNumber(3, 4), fromNumber(1, 5))).toBe(true);
  });
  it('should return false when the first large number is greater than the second', () => {
    expect(lte(fromNumber(-100), fromNumber(-1000))).toBe(false);
    expect(lte(fromNumber(100), fromNumber(0))).toBe(false);
    expect(lte(fromNumber(0.123), fromNumber(-1))).toBe(false);
    expect(lte(fromNumber(100, 2), fromNumber(0.333, 1))).toBe(false);
  });
  it('should return true if the two values are equal', () => {
    expect(lte(fromNumber(1000), fromNumber(1000))).toBe(true);
    expect(lte(fromNumber(0), fromNumber(0))).toBe(true);
    expect(lte(fromNumber(0), fromNumber(-0))).toBe(true);
    expect(lte(fromNumber(-123.123, 123), fromNumber(-123.123, 123))).toBe(true);
  });
});
