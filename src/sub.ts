import { LargeNumber } from './types';
import gt from './gt';
import invert from './invert';
import trim from './trim';
import add from './add';
import create from './create';
import { diff } from './internals';

/**
 * Get the difference of two `LargeNumber`s.
 */
export default function sub(ln1: LargeNumber, ln2: LargeNumber): LargeNumber {
  if (ln2.negative || ln1.negative) return add(ln1, invert(ln2));
  return trim(gt(ln1, ln2) ? diff(ln1, ln2, create(ln1)) : invert(diff(ln2, ln1, create(ln2))));
}
