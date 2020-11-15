import { LargeNumber } from './types';
import gt from './gt';

/**
 * Check to see if the first `LargeNumber` is less than or equal to the second.
 */
export default function lte(ln1: LargeNumber, ln2: LargeNumber): boolean {
  return !gt(ln1, ln2);
}
