import fromNumber from './fromNumber';
import inc from './inc';

describe('inc()', () => {
  it('should increment a large positive number by the provided amount', () => {
    const num = fromNumber(100, 10);

    expect(num.wholeBuckets[0]).toBe(0);
    inc(num);
    expect(num.wholeBuckets[0]).toBe(1);
    inc(num, 10000);
    expect(num.wholeBuckets[1]).toBe(10);
    inc(num, 0.001);
    expect(num.fractionBuckets[0]).toBe(1);
    inc(num, 1.1);
    expect(num.fractionBuckets[0]).toBe(101);
    expect(num.wholeBuckets[0]).toBe(2);
  });
  it('should decrement a large negative number by the provided amount', () => {
    let num = fromNumber(-100, 5);

    expect(num.wholeBuckets[0]).toBe(0);
    inc(num);
    expect(num.wholeBuckets[0]).toBe(999);
    inc(num, 800000);
    expect(num.wholeBuckets[1]).toBe(199);
    inc(num, 1.1);
    expect(num.wholeBuckets[0]).toBe(997);
    expect(num.fractionBuckets[0]).toBe(900);
    num = fromNumber(-200);
    inc(num, 400);
    expect(num).toEqual(fromNumber(200));
  });
});
