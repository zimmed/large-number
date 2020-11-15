import { LargeNumber } from './types';
import gt from './gt';
import invert from './invert';
import trim from './trim';
import create from './create';
import { diff, sum } from './internals';

/**
 * Get the sum of two `LargeNumber`s.
 */
export default function add(ln1: LargeNumber, ln2: LargeNumber): LargeNumber {
  let out;

  if (ln1.negative && !ln2.negative) {
    out = gt(ln2, invert(ln1))
      ? diff(ln2, invert(ln1), create(ln2))
      : invert(diff(invert(ln1), ln2, create(invert(ln1))));
  } else if (!ln1.negative && ln2.negative) {
    out = gt(ln1, invert(ln2))
      ? diff(ln1, invert(ln2), create(ln1))
      : invert(diff(invert(ln2), ln1, create(invert(ln2))));
  } else {
    out = sum(ln1, ln2, create(ln1));
  }

  return trim(out);
}
