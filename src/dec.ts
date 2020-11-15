import { LargeNumber } from './types';
import gt from './gt';
import fromNumber from './fromNumber';
import abs from './abs';
import assign from './assign';
import invert from './invert';
import trim from './trim';
import sub from './sub';
import { increment, decrement } from './internals';

/**
 * Decrement the `LargeNumber` by the provided amount.
 *
 * *Mutates argument*
 */
export default function dec(ln: LargeNumber, num = 1): LargeNumber {
  if (ln.negative) return increment(ln, num);
  if (gt(fromNumber(num), abs(ln))) {
    return assign(ln, ln.negative ? sub(fromNumber(num), abs(ln)) : invert(sub(fromNumber(num), abs(ln))));
  }
  return trim(decrement(ln, num));
}
