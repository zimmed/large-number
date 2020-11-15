import eq from './eq';
import fromNumber from './fromNumber';
import fromString from './fromString';

describe('eq()', () => {
  it('should return true when the two numbers are equal', () => {
    expect(eq(fromNumber(1000), fromNumber(1000))).toBe(true);
    expect(eq(fromNumber(0), fromNumber(0))).toBe(true);
    expect(eq(fromNumber(0), fromNumber(-0))).toBe(true);
    expect(eq(fromNumber(-100, 100), fromNumber(-100, 100))).toBe(true);
    expect(eq(fromNumber(0.000123, -100), fromNumber(0.000123, -100))).toBe(true);
    expect(eq(fromNumber(100123), fromNumber(100123))).toBe(true);
    expect(eq(fromNumber(-100123.123456), fromNumber(-100123.123456))).toBe(true);
    expect(eq(fromString('1000000000000000000000000000000'), fromString('1e+30'))).toBe(true);
  });
  it('should return false when the two numbers are not equal', () => {
    expect(eq(fromNumber(-10), fromNumber(10))).toBe(false);
    expect(eq(fromNumber(100123), fromNumber(100124))).toBe(false);
    expect(eq(fromNumber(-1, 1), fromNumber(-1, -1))).toBe(false);
    expect(eq(fromNumber(-100123.123455), fromNumber(-100123.123456))).toBe(false);
    expect(eq(fromString('100.123'), fromString('100.12300000000000000000001'))).toBe(false);
  });
});
