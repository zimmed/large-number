import { LargeNumber } from './types';

/**
 * Trim leading integer zero buckets and trailing decimal zero buckets.
 *
 * *Mutates argument*
 */
export default function trim(ln: LargeNumber): LargeNumber {
  while (ln.wholeBuckets[ln.wholeBuckets.length - 1] === 0) ln.wholeBuckets.pop();
  while (ln.fractionBuckets[ln.fractionBuckets.length - 1] === 0) ln.fractionBuckets.pop();
  return ln;
}
