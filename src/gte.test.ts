import fromNumber from './fromNumber';
import gte from './gte';

describe('gte()', () => {
  it('should return true when the first large number is greater than the second', () => {
    expect(gte(fromNumber(-100), fromNumber(-1000))).toBe(true);
    expect(gte(fromNumber(100), fromNumber(0))).toBe(true);
    expect(gte(fromNumber(22), fromNumber(21.99999))).toBe(true);
    expect(gte(fromNumber(0.123), fromNumber(-1))).toBe(true);
    expect(gte(fromNumber(100, 2), fromNumber(0.333, 1))).toBe(true);
    expect(gte(fromNumber(1.1234561), fromNumber(1.1234551))).toBe(true);
    expect(gte(fromNumber(1.1234561), fromNumber(1.123456))).toBe(true);
    expect(gte(fromNumber(-1.1234551), fromNumber(-1.1234561))).toBe(true);
    expect(gte(fromNumber(-1.123456), fromNumber(-1.1234561))).toBe(true);
  });
  it('should return false when the first large number is smaller than the second', () => {
    expect(gte(fromNumber(-1000), fromNumber(-100))).toBe(false);
    expect(gte(fromNumber(0), fromNumber(100))).toBe(false);
    expect(gte(fromNumber(-0.123), fromNumber(0))).toBe(false);
    expect(gte(fromNumber(1, 200), fromNumber(3, 200))).toBe(false);
    expect(gte(fromNumber(3, 4), fromNumber(1, 5))).toBe(false);
    expect(gte(fromNumber(-1.1234561), fromNumber(-1.1234551))).toBe(false);
    expect(gte(fromNumber(-1.1234561), fromNumber(-1.123456))).toBe(false);
    expect(gte(fromNumber(1.1234551), fromNumber(1.1234561))).toBe(false);
    expect(gte(fromNumber(1.123456), fromNumber(1.1234561))).toBe(false);
  });
  it('should return true if the two values are equal', () => {
    expect(gte(fromNumber(1000), fromNumber(1000))).toBe(true);
    expect(gte(fromNumber(0), fromNumber(0))).toBe(true);
    expect(gte(fromNumber(0), fromNumber(-0))).toBe(true);
    expect(gte(fromNumber(-123.123, 123), fromNumber(-123.123, 123))).toBe(true);
    expect(gte(fromNumber(1.1234561), fromNumber(1.1234561))).toBe(true);
    expect(gte(fromNumber(-1.1234561), fromNumber(-1.1234561))).toBe(true);
  });
});
