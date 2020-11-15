import { LargeNumber } from './types';
import create from './create';
import trim from './trim';

describe('trim()', () => {
  let num: LargeNumber;

  beforeEach(() => {
    num = create({ wholeBuckets: [100, 0, 0, 10, 0, 0], fractionBuckets: [1, 0, 1, 0, 0] });
  });

  it('should remove trailing and leading zero buckets', () => {
    trim(num);
    expect(num.wholeBuckets).toEqual([100, 0, 0, 10]);
    expect(num.fractionBuckets).toEqual([1, 0, 1]);
  });
});
