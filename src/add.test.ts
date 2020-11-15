import toValue from './toValue';
import fromNumber from './fromNumber';
import add from './add';

describe('add()', () => {
  it('should add two positive large numbers', () => {
    expect(add(fromNumber(999), fromNumber(1))).toEqual(fromNumber(1000));
    expect(toValue(add(fromNumber(100), fromNumber(50)))).toBe(150);
    expect(toValue(add(fromNumber(100), fromNumber(50, 2)))).toBe(50000100);
    expect(toValue(add(fromNumber(0.1), fromNumber(0.33)))).toBe(0.43);
    expect(toValue(add(fromNumber(3.14), fromNumber(0.00001)))).toBe(3.14001);
  });

  it('should add two negative large numbers', () => {
    expect(toValue(add(fromNumber(-100), fromNumber(-50)))).toBe(-150);
    expect(toValue(add(fromNumber(-100), fromNumber(-50, 2)))).toBe(-50000100);
    expect(toValue(add(fromNumber(-0.1), fromNumber(-0.33)))).toBe(-0.43);
    expect(toValue(add(fromNumber(-3.14), fromNumber(-10, -2)))).toBe(-3.14001);
  });

  it('should invert and subtract when more appropriate', () => {
    expect(toValue(add(fromNumber(-100), fromNumber(50)))).toBe(-50);
    expect(toValue(add(fromNumber(-100), fromNumber(200)))).toBe(100);
    expect(toValue(add(fromNumber(100), fromNumber(-50)))).toBe(50);
    expect(toValue(add(fromNumber(100), fromNumber(-200)))).toBe(-100);
    expect(toValue(add(fromNumber(0), fromNumber(-100000.123)))).toBe(-100000.123);
    expect(toValue(add(fromNumber(100, 1), fromNumber(-100000.123)))).toBe(-0.123);
  });
});
