import { LargeNumber } from './types';

/**
 * Check to see if the two `LargeNumbers` are equivalent.
 */
export default function eq(ln1: LargeNumber, ln2: LargeNumber): boolean {
  if (ln1.negative !== ln2.negative) return false;
  if (ln1.wholeBuckets.length !== ln2.wholeBuckets.length) return false;
  if (ln1.fractionBuckets.length !== ln2.fractionBuckets.length) return false;

  for (let i = ln1.wholeBuckets.length; i >= 0; i--) {
    if (ln1.wholeBuckets[i] !== ln2.wholeBuckets[i]) return false;
  }

  for (let i = 0; i < ln1.fractionBuckets.length; i++) {
    if (ln1.fractionBuckets[i] !== ln2.fractionBuckets[i]) return false;
  }

  return true;
}
