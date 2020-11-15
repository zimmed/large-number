import toValue from './toValue';
import fromString from './fromString';
import fromNumber from './fromNumber';
import add from './add';
import toString from './toString';

describe('fromString()', () => {
  it('should create a large number from a number string', () => {
    expect(toValue(fromString('3.14159'))).toBe(3.14159);
    expect(toValue(fromString('.00100'))).toBe(0.001);
    expect(toValue(fromString('-.00100'))).toBe(-0.001);
    expect(toValue(fromString('00.00100'))).toBe(0.001);
    expect(toValue(fromString('00100.00100'))).toBe(100.001);
    expect(toValue(fromString('100.0'))).toBe(100);
    expect(toValue(fromString('-00123.32100'))).toBe(-123.321);
    expect(toValue(fromString('1234567890.0987654321'))).toBe(1234567890.0987654321);
    expect(toValue(fromString('1e+5'))).toBe(100000);
    expect(toValue(fromString('1e-5'))).toBe(0.00001);
  });

  it('should maintain very large numbers with 100% accuracy', () => {
    const lowNum = 321;
    const str = `-1234567890987654000000000000000000000000000000${lowNum}.987654321234567890987654321234567890100000000000000000000000000000000000000000001`;
    const nextStr = `-1234567890987654000000000000000000000000000000${
      lowNum + 1
    }.987654321234567890987654321234567890100000000000000000000000000000000000000000001`;
    const num = add(fromString(str), fromNumber(-1));

    expect(toString(num)).toEqual(nextStr);
  });

  it('should provide an empty large number if bad or malformed string', () => {
    expect(toValue(fromString('null'))).toBe(0);
    expect(toValue(fromString('0x1214'))).toBe(0);
    expect(toValue(fromString('ef1234'))).toBe(0);
    expect(toValue(fromString('a.0'))).toBe(0);
    expect(toValue(fromString('0.c'))).toBe(0);
    expect(toValue(fromString('1.1.1'))).toBe(0);
  });
});
