import create, { DEFAULT } from './create';

describe('create()', () => {
  it('should return a new number with default buckets', () => {
    const num = create();

    expect(num).toBeTruthy();
    expect(num).toHaveProperty('negative');
    expect(num).toHaveProperty('wholeBuckets');
    expect(num).toHaveProperty('fractionBuckets');
    expect(num.negative).toBe(DEFAULT.negative);
    expect(num.wholeBuckets).toEqual(DEFAULT.wholeBuckets);
    expect(num.fractionBuckets).toEqual(DEFAULT.fractionBuckets);
  });

  it('should return a number with the provided properties', () => {
    const negative = true;
    const wholeBuckets = [999, 99];
    const fractionBuckets = [0, 0, 1];
    const num = create({ negative, wholeBuckets, fractionBuckets });

    expect(num.negative).toBe(negative);
    expect(num.wholeBuckets).toEqual(wholeBuckets);
    expect(num.fractionBuckets).toEqual(fractionBuckets);
  });
});
