import fromNumber from './fromNumber';
import shift from './shift';
import toValue from './toValue';

describe('shift()', () => {
  it('should shift values to the right with a positive number', () => {
    expect(toValue(shift(fromNumber(3.14159), 2))).toBe(314.159);
    expect(toValue(shift(fromNumber(5), 10))).toBe(50000000000);
    expect(toValue(shift(fromNumber(0.000049), 3))).toBe(0.049);
    expect(toValue(shift(fromNumber(-0.000049), 7))).toBe(-490);
  });

  it('should shift values to the left with a negative number', () => {
    expect(toValue(shift(fromNumber(3.14159), -2))).toBe(0.0314159);
    expect(toValue(shift(fromNumber(5), -10))).toBe(0.0000000005);
    expect(toValue(shift(fromNumber(-0.049), -3))).toBe(-0.000049);
  });
});
