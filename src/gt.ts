import { LargeNumber } from './types';

/**
 * Check to see if the first `LargeNumber` is greater than the second.
 */
export default function gt(ln1: LargeNumber, ln2: LargeNumber): boolean {
  if (ln1.negative && !ln2.negative) return false;
  if (!ln1.negative && ln2.negative) return true;
  if (ln1.wholeBuckets.length > ln2.wholeBuckets.length) return !ln1.negative;
  if (ln1.wholeBuckets.length < ln2.wholeBuckets.length) return ln1.negative;

  for (let i = ln1.wholeBuckets.length; i >= 0; i--) {
    if (ln1.wholeBuckets[i] === ln2.wholeBuckets[i]) continue;
    return ln1.wholeBuckets[i] > ln2.wholeBuckets[i] ? !ln1.negative : ln1.negative;
  }

  for (let i = 0; i < ln1.fractionBuckets.length; i++) {
    if (ln1.fractionBuckets[i] === ln2.fractionBuckets[i]) continue;
    return !ln2.fractionBuckets[i] || ln1.fractionBuckets[i] > ln2.fractionBuckets[i] ? !ln1.negative : ln1.negative;
  }

  return ln1.fractionBuckets.length !== ln2.fractionBuckets.length && ln1.negative;
}
