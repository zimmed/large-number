import fromNumber from './fromNumber';
import lt from './lt';

describe('lt()', () => {
  it('should return true when the first large number is smaller than the second', () => {
    expect(lt(fromNumber(-1000), fromNumber(-100))).toBe(true);
    expect(lt(fromNumber(0), fromNumber(100))).toBe(true);
    expect(lt(fromNumber(-0.123), fromNumber(0))).toBe(true);
    expect(lt(fromNumber(1, 200), fromNumber(3, 200))).toBe(true);
    expect(lt(fromNumber(3, 4), fromNumber(1, 5))).toBe(true);
  });
  it('should return false when the first large number is greater than the second', () => {
    expect(lt(fromNumber(-100), fromNumber(-1000))).toBe(false);
    expect(lt(fromNumber(100), fromNumber(0))).toBe(false);
    expect(lt(fromNumber(0.123), fromNumber(-1))).toBe(false);
    expect(lt(fromNumber(100, 2), fromNumber(0.333, 1))).toBe(false);
  });
  it('should return false if the two values are equal', () => {
    expect(lt(fromNumber(1000), fromNumber(1000))).toBe(false);
    expect(lt(fromNumber(0), fromNumber(0))).toBe(false);
    expect(lt(fromNumber(-123.123, 123), fromNumber(-123.123, 123))).toBe(false);
  });
});
