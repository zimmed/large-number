import fromNumber from './fromNumber';
import fromString from './fromString';
import toString from './toString';

describe('toString()', () => {
  it('should return the long form number as a string', () => {
    expect(toString(fromNumber(1e21))).toBe('1' + Array(21).fill(0).join(''));
    expect(toString(fromString('9000000003.1415926539'))).toBe('9000000003.1415926539');
    expect(toString(fromString('9000000003.1415926539'), ',')).toBe('9,000,000,003.1415926539');
    expect(toString(fromString('9000000003.1415926539'), '.', ',')).toBe('9.000.000.003,1415926539');
  });
});
