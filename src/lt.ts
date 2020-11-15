import { LargeNumber } from './types';
import gte from './gte';

/**
 * Check to see if the first `LargeNumber` is less than the second.
 */
export default function lt(ln1: LargeNumber, ln2: LargeNumber): boolean {
  return !gte(ln1, ln2);
}
