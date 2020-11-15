import { LargeNumber } from './types';
import eq from './eq';

/**
 * Check to see if the first `LargeNumber` is not equal to the second.
 */
export default function neq(ln1: LargeNumber, ln2: LargeNumber): boolean {
  return !eq(ln1, ln2);
}
