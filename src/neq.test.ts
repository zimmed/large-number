import fromNumber from './fromNumber';
import fromString from './fromString';
import neq from './neq';

describe('neq()', () => {
  it('should return false when the two numbers are equal', () => {
    expect(neq(fromNumber(1000), fromNumber(1000))).toBe(false);
    expect(neq(fromNumber(0), fromNumber(0))).toBe(false);
    expect(neq(fromNumber(0), fromNumber(-0))).toBe(false);
    expect(neq(fromNumber(-100, 100), fromNumber(-100, 100))).toBe(false);
    expect(neq(fromNumber(0.000123, -100), fromNumber(0.000123, -100))).toBe(false);
  });
  it('should return true when the two numbers are not equal', () => {
    expect(neq(fromNumber(-10), fromNumber(10))).toBe(true);
    expect(neq(fromNumber(-1, 1), fromNumber(-1, -1))).toBe(true);
    expect(neq(fromString('100.123'), fromString('100.12300000000000000000001'))).toBe(true);
  });
});
