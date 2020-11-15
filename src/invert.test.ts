import fromNumber from './fromNumber';
import invert from './invert';

describe('invert()', () => {
  it('should invert the sign for a given number', () => {
    expect(invert(fromNumber(Math.PI)).negative).toBe(true);
    expect(invert(fromNumber(-100.123)).negative).toBe(false);
    expect(invert(invert(fromNumber(300, -10))).negative).toBe(false);
  });
});
