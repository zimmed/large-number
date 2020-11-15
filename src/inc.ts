import { LargeNumber } from './types';
import gt from './gt';
import fromNumber from './fromNumber';
import abs from './abs';
import assign from './assign';
import invert from './invert';
import sub from './sub';
import { increment, decrement } from './internals';

/**
 * Increment the `LargeNumber` by the provided amount.
 *
 * *Mutates argument*
 */
export default function inc(ln: LargeNumber, num = 1): LargeNumber {
  if (ln.negative) {
    return gt(fromNumber(num), abs(ln))
      ? assign(ln, ln.negative ? sub(fromNumber(num), abs(ln)) : invert(sub(fromNumber(num), abs(ln))))
      : decrement(ln, num);
  }
  return increment(ln, num);
}
