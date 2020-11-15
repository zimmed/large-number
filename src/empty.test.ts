import fromNumber from './fromNumber';
import dec from './dec';
import create from './create';
import empty from './empty';

describe('empty()', () => {
  it('should return true if the number is empty (0)', () => {
    expect(empty(fromNumber(0))).toBe(true);
    expect(empty(fromNumber(-0))).toBe(true);
    expect(empty(create())).toBe(true);
    expect(empty(dec(fromNumber(1)))).toBe(true);
  });
  it('should return false if the number is not empty (0)', () => {
    expect(empty(fromNumber(1))).toBe(false);
    expect(empty(fromNumber(-1))).toBe(false);
    expect(empty(fromNumber(-1, -100))).toBe(false);
    expect(empty(dec(fromNumber(1.00001)))).toBe(false);
  });
});
