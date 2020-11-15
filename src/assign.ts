import { LargeNumber } from './types';

/**
 * Assign the values of the second `LargeNumber` into the first.
 *
 * *Mutates argument*
 */
export default function assign(into: LargeNumber, from: LargeNumber): LargeNumber {
  into.negative = from.negative;
  into.wholeBuckets = from.wholeBuckets.slice(0);
  into.fractionBuckets = from.fractionBuckets.slice(0);
  return into;
}
