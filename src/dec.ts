import { LargeNumber } from './types';
import gt from './gt';
import fromNumber from './fromNumber';
import invert from './invert';
import assign from './assign';
import trim from './trim';
import sub from './sub';
import { increment, decrement } from './internals';

/**
 * Decrement the `LargeNumber` by the provided amount.
 *
 * *Mutates argument*
 */
export default function dec(ln: LargeNumber, num = 1): LargeNumber {
  if (ln.negative) return trim(increment(ln, num));
  const n = fromNumber(num);

  return gt(n, ln) ? assign(ln, invert(sub(n, ln))) : trim(decrement(ln, num));
}
