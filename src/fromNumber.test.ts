import fromNumber from './fromNumber';

describe('fromNumber()', () => {
  it('should create a large number from builtin number', () => {
    let num = fromNumber(95100010.00003);

    expect(num.negative).toBe(false);
    expect(num.wholeBuckets).toEqual([10, 100, 95]);
    expect(num.fractionBuckets).toEqual([0, 30]);
    num = fromNumber(-1e10);
    expect(num.negative).toBe(true);
    expect(num.wholeBuckets).toEqual([0, 0, 0, 10]);
    expect(num.fractionBuckets).toEqual([]);
    num = fromNumber(3.1415);
    expect(num.negative).toBe(false);
    expect(num.wholeBuckets).toEqual([3]);
    expect(num.fractionBuckets).toEqual([141, 500]);
    expect(fromNumber(9003.1415926539).wholeBuckets).toEqual([3, 9]);
    expect(fromNumber(9003.1415926539).fractionBuckets).toEqual([141, 592, 653, 900]);
  });

  it('should create a large number from builtin number with the specified offset bucket', () => {
    let num = fromNumber(12, 3);

    expect(num.negative).toBe(false);
    expect(num.wholeBuckets).toEqual([0, 0, 0, 12]);
    expect(num.fractionBuckets).toEqual([]);
    num = fromNumber(-3.5, 1);
    expect(num.negative).toBe(true);
    expect(num.wholeBuckets).toEqual([500, 3]);
    expect(num.fractionBuckets).toEqual([]);
    num = fromNumber(3.14, -3);
    expect(num.negative).toBe(false);
    expect(num.wholeBuckets).toEqual([]);
    expect(num.fractionBuckets).toEqual([0, 0, 3, 140]);
  });
});
