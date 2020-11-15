import fromNumber from './fromNumber';
import dec from './dec';

describe('dec()', () => {
  it('should decrement a large positive number by the provided amount', () => {
    const num = fromNumber(100, 3);

    expect(num.wholeBuckets[0]).toBe(0);
    dec(num);
    expect(num).toEqual(fromNumber(99999999999));
    dec(num, 0.001);
    expect(num).toEqual(fromNumber(99999999998.999));
    dec(num, 99999999998);
    expect(num).toEqual(fromNumber(0.999));
  });
  it('should increment a large negative number by the provided amount', () => {
    const num = fromNumber(-100, 10);

    expect(num.wholeBuckets[0]).toBe(0);
    dec(num);
    expect(num.wholeBuckets[0]).toBe(1);
    dec(num, 10000);
    expect(num.wholeBuckets[1]).toBe(10);
    dec(num, 0.001);
    expect(num.fractionBuckets[0]).toBe(1);
    dec(num, 1.1);
    expect(num.fractionBuckets[0]).toBe(101);
    expect(num.wholeBuckets[0]).toBe(2);
  });
});
