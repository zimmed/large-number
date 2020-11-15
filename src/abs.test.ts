import abs from './abs';
import fromNumber from './fromNumber';

describe('abs()', () => {
  it('should turn a negative number positive', () => {
    expect(abs(fromNumber(-1)).negative).toBe(false);
    expect(abs(fromNumber(-123, -123)).negative).toBe(false);
    expect(abs(fromNumber(-100.123, 100)).negative).toBe(false);
  });
  it('should keep a positive number positive', () => {
    expect(abs(fromNumber(1)).negative).toBe(false);
    expect(abs(fromNumber(123, -123)).negative).toBe(false);
    expect(abs(fromNumber(100.123, 100)).negative).toBe(false);
  });
});
