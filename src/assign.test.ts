import assign from './assign';
import fromNumber from './fromNumber';
import inc from './inc';

describe('assign()', () => {
  it('should assign the values of one large number to the other', () => {
    const ln2 = fromNumber(3.14159, 10);
    const ln1 = fromNumber(300.003);

    expect(ln1).toEqual(fromNumber(300.003));
    assign(ln1, ln2);
    expect(ln1).toEqual(fromNumber(3.14159, 10));
    inc(ln1);
    expect(ln1.wholeBuckets[0]).toBe(1);
    expect(ln2.wholeBuckets[0]).toBe(0);
  });
});
