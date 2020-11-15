import fromNumber from './fromNumber';
import sub from './sub';
import toValue from './toValue';

describe('sub()', () => {
  it('should subtract two large numbers', () => {
    expect(toValue(sub(fromNumber(100), fromNumber(50)))).toBe(50);
    expect(toValue(sub(fromNumber(1, 3), fromNumber(1)))).toBe(999999999);
    expect(toValue(sub(fromNumber(0.123), fromNumber(0.1)))).toBe(0.023);
    expect(toValue(sub(fromNumber(-0.123), fromNumber(0.1)))).toBe(-0.223);
    expect(toValue(sub(fromNumber(-1000), fromNumber(100)))).toBe(-1100);
    expect(toValue(sub(fromNumber(100.123), fromNumber(200000.0001)))).toBe(-199899.8771);
    expect(toValue(sub(fromNumber(-1000), fromNumber(-100)))).toBe(-900);
  });
});
