import fromNumber from './fromNumber';
import trunc from './trunc';

describe('trunc()', () => {
  it('should trunc the number by zeroing or removing necessary buckets', () => {
    expect(trunc(fromNumber(100.0001))).toEqual(fromNumber(100));
    expect(trunc(fromNumber(100, -100))).toEqual(fromNumber(0));
    expect(trunc(fromNumber(999999), 1)).toEqual(fromNumber(999000));
    expect(trunc(fromNumber(0.999999), -1)).toEqual(fromNumber(0.999));
  });
});
