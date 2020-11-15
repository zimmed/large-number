import { LargeNumber } from './types';
import gt from './gt';
import fromNumber from './fromNumber';
import abs from './abs';
import assign from './assign';
import sub from './sub';
import trim from './trim';
import { increment, decrement } from './internals';

/**
 * Increment the `LargeNumber` by the provided amount.
 *
 * *Mutates argument*
 */
export default function inc(ln: LargeNumber, num = 1): LargeNumber {
  if (ln.negative) {
    return gt(fromNumber(num), abs(ln)) ? assign(ln, sub(fromNumber(num), abs(ln))) : trim(decrement(ln, num));
  }
  return trim(increment(ln, num));
}
