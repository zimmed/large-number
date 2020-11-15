import { LargeNumber } from './types';

/**
 * Determines if `LargeNumber` is empty, or `0`.
 */
export default function empty(ln: LargeNumber): boolean {
  return !ln.fractionBuckets.length && !ln.wholeBuckets.length;
}
