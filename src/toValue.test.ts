import { LargeNumber } from './types';
import fromNumber from './fromNumber';
import create from './create';
import toValue from './toValue';

describe('toValue()', () => {
  const N = Math.PI * 1e10;
  let num: LargeNumber;

  beforeEach(() => {
    num = fromNumber(N);
  });

  it('should return a number value for the large number object', () => {
    expect(toValue(num)).toBe(N);
    expect(toValue(create({ ...num, negative: true }))).toBe(-N);
  });
});
